# coding=utf-8

import numpy as np
from sklearn.manifold import TSNE
from cqh_data_process import LoadData
import paddle
from paddlenlp.embeddings import  TokenEmbedding
token_embedding = TokenEmbedding(embedding_name="w2v.baidu_encyclopedia.target.word-word.dim300")
class DataDecomposition(object):
    def __init__(self, data):
        self.data = data
    def data_handle(self):
        self.data = np.array(self.data)[:, 2:]
        self.data=self.data[:,[0,1,2,4,5,7,9,10,11]]
        # label = [i for i in range(13) if i!=8 ]
        # self.data = self.data[:, np.array(label)]
        # self.data=np.concatenate([self.data[:,:3],self.covert_vector(self.data[:,3]),
        #                           self.data[:,4:6],self.covert_vector(self.data[:,6]),
        #                           self.data[:,7:11],self.covert_vector(self.data[:,-1])],
        #                          axis=1)
    def fit(self):
        tsne = TSNE(n_components=2, init='pca', random_state=0)
        return tsne.fit_transform(self.data)

    def covert_vector(self,x):
        w_v=np.array([])
        for i in x:
            vector = None
            if i==0:
                vector=[0]*300
            else:
                tokens=i.split(',')
                for j in tokens:
                    if not vector:
                        vector=token_embedding.search(j)
                    else:
                        vector+=token_embedding(j)
            w_v.append(vector)
        return w_v

if __name__ == '__main__':
    data = LoadData().load()
    print(DataDecomposition(data).fit())
