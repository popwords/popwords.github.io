import pandas as pd
from collections import defaultdict
import random
from random import randint

data = pd.read_pickle('corpus.pkl')

bolsonaro1_text = data.transcript.loc['Bolsonaro_1']
bolsonaro2_text = data.transcript.loc['Bolsonaro_2']
bolsonaro3_text = data.transcript.loc['Bolsonaro_3']
salvini_text = data.transcript.loc['salvini_2']
salvini1_text = data.transcript.loc['salvini_1']
trump1_text = data.transcript.loc['trump_1']
trump2_text = data.transcript.loc['trump_2']
merged = salvini1_text + salvini_text + trump1_text + trump2_text + bolsonaro1_text + bolsonaro2_text + bolsonaro3_text
# ali_text[:200]


def markov_chain(text):
    '''The input is a string of text and the output will be a dictionary with each word as
       a key and each value as the list of words that come after the key in the text.'''

    # Tokenize the text by word, though including punctuation
    words = text.split(' ')

    # Initialize a default dictionary to hold all of the words and next words
    m_dict = defaultdict(list)

    # Create a zipped list of all of the word pairs and put them in word: list of next words format
    for current_word, next_word in zip(words[0:-1], words[1:]):
        m_dict[current_word].append(next_word)

    # Convert the default dict back into a dictionary
    m_dict = dict(m_dict)
    return m_dict


salvini_dict = markov_chain(merged)


value = randint(100, 200)
print(value)

def generate_sentence(chain, count=value):
    '''Input a dictionary in the format of key = current word, value = list of next words
       along with the number of words you would like to see in your generated sentence.'''

    # Capitalize the first word
    word1 = random.choice(list(chain.keys()))
    sentence = word1.capitalize()

    # Generate the second word from the value list. Set the new word as the first word. Repeat.
    for i in range(count-1):
        word2 = random.choice(chain[word1])
        word1 = word2
        sentence += ' ' + word2

    # End it with a period
    sentence += '.'
    return(sentence)


print(generate_sentence(salvini_dict))

