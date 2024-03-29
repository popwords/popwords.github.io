import pandas as pd
from collections import Counter
from sklearn.feature_extraction import text
from sklearn.feature_extraction.text import CountVectorizer
import pickle
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import numpy as np


data = pd.read_pickle('dtm.pkl')
data = data.transpose()
data.head()

top_dict = {}
for c in data.columns:
    top = data[c].sort_values(ascending=False).head(30)
    top_dict[c] = list(zip(top.index, top.values))

print('TOP_DICT', top_dict)

for politician, top_words in top_dict.items():
    print(politician)
    print(', '.join([word for word, count in top_words[0:14]]))
    print('---')

words = []
for comedian in data.columns:
    top = [word for (word, count) in top_dict[comedian]]
    for t in top:
        words.append(t)

most_common = Counter(words).most_common()

print('MOST_COMMON', most_common)
add_stop_words = [word for word, count in Counter(words).most_common() if count > 6]
print(add_stop_words)

# Read in cleaned data
data_clean = pd.read_pickle('data_clean.pkl')

# Add new stop words
stop_words = text.ENGLISH_STOP_WORDS.union(add_stop_words)

# Recreate document-term matrix
cv = CountVectorizer(stop_words=stop_words)
data_cv = cv.fit_transform(data_clean.transcript)
data_stop = pd.DataFrame(data_cv.toarray(), columns=cv.get_feature_names())
data_stop.index = data_clean.index

# Pickle it for later use
pickle.dump(cv, open("cv_stop.pkl", "wb"))
data_stop.to_pickle("dtm_stop.pkl")

wc = WordCloud(stopwords=stop_words, background_color="white", colormap="Dark2", max_font_size=150, random_state=42)
plt.rcParams['figure.figsize'] = [160, 60]

full_names = ['Bolsonaro 1', 'Bolsonaro 2', 'Bolsonaro 3', 'Matteo Salvini 1', 'Matteo Salvini 2', 'Donald Trump 1', 'Donald Trump 2']

# Create subplots for each comedian
for index, comedian in enumerate(data.columns):
    wc.generate(data_clean.transcript[comedian])

    plt.subplot(3, 4, index + 1)
    plt.imshow(wc, interpolation="bilinear")
    plt.axis("off")
    plt.title(full_names[index])

plt.show()

#  AMOUNT OF RELIGION
data_holy_words = data.transpose()[['god', 'mary', 'bible', 'gospel']]
data_religion = pd.concat([data_holy_words.god + data_holy_words.mary, data_holy_words.bible + data_holy_words.gospel], axis=1)
data_religion.columns = ['god_mary', 'bible_gospel']
print(data_religion)

plt.rcParams['figure.figsize'] = [10, 8]

for i, comedian in enumerate(data_religion.index):
    x = data_religion.god_mary.loc[politician]
    y = data_religion.bible_gospel.loc[politician]
    plt.scatter(x, y, color='red')
    plt.text(x + 1.5, y + 0.5, full_names[i], fontsize=10)
    plt.xlim(-5, 155)

plt.title('Number of Religion Words Used in Routine', fontsize=20)
plt.xlabel('Number of god_mary', fontsize=15)
plt.ylabel('Number of bible_gospel', fontsize=15)

plt.show()
