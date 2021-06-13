# coding=utf-8
import pandas as pd


class LoadData(object):
    """
    获取全部数据
    """

    def __init__(self):
        self.path = "../data/ANSWER_v2_done.CSV"

    def load(self):
        data = pd.read_csv(self.path, encoding='gbk').values.tolist()
        for i in range(len(data)):
            data[i][2] = float(int(data[i][2].replace('秒', '')))
            for j in range(len(data[i])):
                if data[i][j] == '0' or data[i][j] == '无':
                    data[i][j] = 0
        print(data[:5])
        print("获取数据完成！")
        return data


class OverView(object):
    """
    计算概览数据
    """

    def __init__(self, data: list):
        self.data = data
        self.length = len(data)

    def count_have_plans(self):
        have_num = 0
        for i in self.data:
            if i[3]:
                have_num += 1
        have_rate = have_num / self.length
        return have_rate

    def count_now_have(self):
        have_num = 0
        for i in self.data:
            if i[4]:
                have_num += 1
        have_rate = have_num / self.length
        return have_rate

    def count_have_plans_not_now(self):
        diff_num = 0
        have_num = 0
        for i in self.data:
            if i[3]:
                have_num += 1
            if i[3] and not i[4]:
                diff_num += 1
        diff_rate = diff_num / have_num
        return diff_rate

    def wanted(self):
        things = {}
        for i in self.data:
            if i[5] != 0:
                for j in i[5].split('、'):
                    if j not in things.keys():
                        things[j] = 0
                    things[j] += 1
        print(things)

    # def draw(self):



LoadData().load()
# print(OverView(LoadData().load()).count_have_plans())
# print(OverView(LoadData().load()).count_now_have())
# print(OverView(LoadData().load()).count_have_plans_not_now())
# print(OverView(LoadData().load()).wanted())
