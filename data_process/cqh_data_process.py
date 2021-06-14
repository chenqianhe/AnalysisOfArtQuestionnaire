# coding=utf-8
import pandas as pd
import jieba.analyse


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
        # print(data[:5])
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
        # print(things)
        return things

    def canot_rate(self, index):
        num = 0
        for i in self.data:
            if i[index]:
                num += 1
        rate = num / self.length
        return rate

    def canot_explore(self):
        canot_explore_rate = self.canot_rate(6)
        return canot_explore_rate

    def canot_draw(self):
        canot_drow_rate = self.canot_rate(7)
        return canot_drow_rate

    def canot_impulse(self):
        canot_impulse_rate = self.canot_rate(8)
        return canot_impulse_rate

    def canot_time(self):
        canot_time_rate = self.canot_rate(9)
        return canot_time_rate

    def canot_life(self):
        canot_life_rate = self.canot_rate(10)
        return canot_life_rate

    def get_data(self):
        return self.count_have_plans(), self.count_now_have(), self.count_have_plans_not_now(), \
               self.wanted(), self.canot_explore(), self.canot_draw(), self.canot_impulse(), \
               self.canot_time(), self.canot_life()


class DrawData(object):
    """
    画图展示数据
    """
    def __init__(self, data: list):
        self.data = data
        self.length = len(data)

    def draw(self):
        draw_object = {}
        for i in range(len(self.data)):
            if isinstance(self.data[i][7], str):
                if self.data[i][7] not in draw_object.keys():
                    draw_object[self.data[i][7]] = []
                draw_object[self.data[i][7]].append(i)
        return draw_object

    def form(self):
        art_form = {}
        for i in range(len(self.data)):
            if isinstance(self.data[i][8], str):
                seg = jieba.analyse.textrank(self.data[i][8], topK=None, withWeight=False, allowPOS=('n', 'vn'),
                                             withFlag=False)
                if seg:
                    for j in seg:
                        if j not in art_form.keys():
                            art_form[j] = []
                        art_form[j].append(i)
        return art_form

    def life(self):
        wanted_life = {}
        for i in range(len(self.data)):
            if isinstance(self.data[i][10], str):
                seg = jieba.analyse.textrank(self.data[i][10], topK=None, withWeight=False, allowPOS=('n', 'vn'),
                                             withFlag=False)
                if seg:
                    for j in seg:
                        if j not in wanted_life.keys():
                            wanted_life[j] = []
                        wanted_life[j].append(i)
        return wanted_life

    def get_data(self):
        draw_data, form_data, life_data = self.draw(), self.form(), self.life()
        three_infos = {}
        for i in range(self.length):
            three_infos[i] = {"draw": [], "form": [], "life": []}
            for j in draw_data:
                if i in draw_data[j]:
                    three_infos[i]["draw"].append(j)

            for j in form_data:
                if i in form_data[j]:
                    three_infos[i]["form"].append(j)

            for j in life_data:
                if i in life_data[j]:
                    three_infos[i]["life"].append(j)

        return draw_data, form_data, life_data, three_infos


class Detail_Info(object):
    """
    详细信息
    """
    def __init__(self, data: list):
        self.data = data
        self.length = len(data)

    def get_data(self):
        detail_info = {}
        for i in range(len(self.data)):
            detail_info[i] = {"time": self.data[i][2], "年级": self.data[i][11], "专业": self.data[i][12], "性别": self.data[i][13],
                              "乐器": self.data[i][5], "画画": self.data[i][7], "艺术活动": self.data[i][8],
                              "艺术生活": self.data[i][10], "日常生活": self.data[i][14],
                              "是否想学艺术爱好": self.data[i][3], "是否有艺术特长": self.data[i][4],
                              "是否敢于探索": self.data[i][6], "是否渴望参加艺术活动": self.data[i][9],
                              }
        return detail_info


class Dimension_Reduction(object):
    def __init__(self, data, path):
        self.data = data
        self.location_data = pd.read_csv(path, usecols=[1, 2, 3]).values.tolist()

    def get_data(self):
        pass
        dimension_info = {}
        for i in range(len(self.data)):
            dimension_info[i] = {"location": [self.location_data[i][0], self.location_data[i][1]],
                                 "年级": self.data[i][11], "专业": self.data[i][12], "性别": self.data[i][13],
                                 "绘画": 1 if isinstance(self.data[i][7], str) else 0,
                                 "艺术活动": 1 if isinstance(self.data[i][8], str) else 0,
                                 "艺术生活": 1 if isinstance(self.data[i][10], str) else 0}
        return dimension_info
#
# LoadData().load()
# print(OverView(LoadData().load()).count_have_plans())
# print(OverView(LoadData().load()).count_now_have())
# print(OverView(LoadData().load()).count_have_plans_not_now())
# print(OverView(LoadData().load()).wanted())
# print(OverView(LoadData().load()).draw())
# print(OverView(LoadData().load()).form())
# print(OverView(LoadData().load()).life())
# print(OverView(LoadData().load()).explore())
# print(OverView(LoadData().load()).canot_draw())
# print("overview", OverView(LoadData().load()).get_data())
# print("draw data:", DrawData(LoadData("../data/ANSWER_v2_done.CSV").load()).get_data())
# print(Dimension_Reduction(LoadData("../data/ANSWER_v2_done.CSV").load(), "../data/location.csv").get_data())