import pandas as pd
from textblob import TextBlob
import matplotlib.pyplot as plt
import numpy as np
import math

data = pd.read_pickle('corpus.pkl')

pol = lambda x: TextBlob(x).sentiment.polarity
sub = lambda x: TextBlob(x).sentiment.subjectivity

data['polarity'] = data['transcript'].apply(pol)
data['subjectivity'] = data['transcript'].apply(sub)
print('SENTIMENT', data)
with pd.option_context('display.max_rows', None, 'display.max_columns', None):  # more options can be specified also
    # print(df)
    print(data)

plt.rcParams['figure.figsize'] = [100, 100]

for index, politician in enumerate(data.index):
    print(politician)
    x = data.polarity.loc[politician]
    y = data.subjectivity.loc[politician]
    print(x)
    plt.scatter(x, y, color='#FF0000')
    plt.text(x + .0025, y + .003, data['full_name'][index], fontsize=8)
    plt.xlim(-.4, .4)

plt.title('Sentiment Analysis', fontsize=20)
plt.xlabel('<-- Negative -------- Positive -->', fontsize=15)
plt.ylabel('<-- Facts -------- Opinions -->', fontsize=15)

plt.show()


def split_text(text, n=10):
    '''Takes in a string of text and splits into n equal parts, with a default of 10 equal parts.'''

    # Calculate length of text, the size of each chunk of text and the starting points of each chunk of text
    length = len(text)
    size = math.floor(length / n)
    start = np.arange(0, length, size)

    # Pull out equally sized pieces of text and put it into a list
    split_list = []
    for piece in range(n):
        split_list.append(text[start[piece]:start[piece] + size])
    return split_list


list_pieces = []
for t in data.transcript:
    split = split_text(t)
    list_pieces.append(split)

polarity_transcript = []
for lp in list_pieces:
    polarity_piece = []
    for p in lp:
        polarity_piece.append(TextBlob(p).sentiment.polarity)
    polarity_transcript.append(polarity_piece)

print(polarity_transcript)

plt.plot(polarity_transcript[0])
plt.title(data['full_name'].index[0])

plt.xlabel('Time', fontsize=15)
plt.ylabel('Polarity', fontsize=15)
plt.show()

plt.rcParams['figure.figsize'] = [16, 12]

for index, politician in enumerate(data.index):
    plt.subplot(3, 4, index + 1)
    plt.plot(polarity_transcript[index])
    plt.plot(np.arange(0, 10), np.zeros(10))
    plt.title(data['full_name'][index])
    plt.ylim(ymin=-.3, ymax=.5)
    plt.xlabel('Time', fontsize=10)
    plt.ylabel('Polarity', fontsize=10)

plt.show()
