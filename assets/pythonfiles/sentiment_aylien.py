import textblob
import os
import re
from aylienapiclient import textapi
import pandas as pd
from textblob import TextBlob
import matplotlib.pyplot as plt
import numpy as np
import math

path = "texts"
fileList = os.listdir(path)
for i in fileList:
    file = open(os.path.join(path+'/'+ i), 'r', encoding='utf-8-sig')
    data = file.readlines()
    data = [re.sub('\s+',' ', sent) for sent in data]
    data = [re.sub('\'', '', sent) for sent in data]
    data = [x for x in data if x != ' ']

    c = textapi.Client("90a0fe44", "9fbdbce97edf0a5b41f68f349a5d3621")
    s = c.Sentiment({'text':  data})
    print(i, s)
