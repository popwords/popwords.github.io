import pickle
import pandas as pd
import re
import string
from sklearn.feature_extraction.text import CountVectorizer


def read(txt):
    f1 = open('texts/' + txt + '.txt', 'r', encoding='utf-8')
    row_text = f1.read()
    return row_text


politicians = ['Bolsonaro_1', 'Bolsonaro_2', 'Bolsonaro_3', 'salvini_1', 'salvini_2', 'trump_1', 'trump_2']  # 'bolsonaro_1', 'bolsonaro_2', 'bolsonaro_3',

for i, c in enumerate(politicians):
    file_object = open(c, 'wb')
    pickle.dump(read(c), file_object)
    file_object.close()

data = {}
for i, c in enumerate(politicians):
    file_object = open(c, 'rb')
    data[c] = pickle.load(file_object)

print(data)
# print(data.keys())
# print(data['salvini_1'][:5])


# COMBINE
def combine_text(list_of_text):
    '''Takes a list of text and combines them into one large chunk of text.'''
    combined_text = ''.join(list_of_text)
    return combined_text


data_combined = {key: [combine_text(value)] for (key, value) in data.items()}
print(data_combined)

# PANDA DATASET
pd.set_option('max_colwidth', 300)

data_df = pd.DataFrame.from_dict(data_combined).transpose()
data_df.columns = ['transcript']
data_df = data_df.sort_index()
# data_df.transcript.loc['salvini_1']
print('DF', data_df)


# DATA CLEAN
def clean_text_round1(text):
    '''Make text lowercase, remove text in square brackets, remove punctuation and remove words containing numbers.'''
    text = text.lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\w*\d\w*', '', text)
    return text

round1 = lambda x: clean_text_round1(x)
data_clean = pd.DataFrame(data_df.transcript.apply(round1))
print('DATA_CLEAN_1', data_clean)


def clean_text_round2(text):
    '''Get rid of some additional punctuation and non-sensical text that was missed the first time around.'''
    text = re.sub('[‘’“”…]', '', text)
    text = re.sub('\n', '', text)
    return text

round2 = lambda x: clean_text_round2(x)

data_clean = pd.DataFrame(data_clean.transcript.apply(round2))
print('DATA_CLEAN_2', data_clean)

print(data_df)

full_names = ['Bolsonaro_1-MinistrerOfDefence', 'Bolsonaro_2-InauguralSpeech', 'Bolsonaro_3-UNSpeech', 'MatteoSalvini_1-Senate', 'MatteoSalvini_2-PiazzaDuomo', 'DonaldTrump_1-MinnesotaRally', 'DonaldTrump_2-InauguralSpeech']
data_df['full_name'] = full_names
data_df.to_pickle("corpus.pkl")

cv = CountVectorizer(token_pattern=r"(?u)\b\w+\b", stop_words='english', ngram_range=(1, 1), analyzer='word')
data_cv = cv.fit_transform(data_clean.transcript)
data_dtm = pd.DataFrame(data_cv.toarray(), columns=cv.get_feature_names())
data_dtm.index = data_clean.index
print(data_dtm)
data_dtm.to_pickle("dtm.pkl")
data_clean.to_pickle('data_clean.pkl')
pickle.dump(cv, open("cv.pkl", "wb"))