from flask import Flask
from data_process.cqh_data_process import LoadData
from data_process.cqh_data_process import LoadData, OverView, DrawData, Detail_Info, Dimension_Reduction
import json

ori_data = LoadData("data/ANSWER_v2_done.CSV").load()
# count_have_plans, count_now_have, count_have_plans_not_now, wanted, canot_explore, canot_draw, canot_impulse, \
#     canot_time, canot_life = OverView(ori_data).get_data()
#
# draw, form, life = DrawData(ori_data).get_data()
# detail_info = Detail_Info(ori_data).get_data()
# print(detail_info)
# dimension_data = Dimension_Reduction(ori_data, "data/location.csv").get_data()

# print(ori_data)

#
# print("overview", OverView(ori_data).get_data())


app = Flask(__name__)


@app.route('/')
def main_page():
    data = LoadData("data/ANSWER_v2_done.CSV").load()

    count_have_plans, count_now_have, count_have_plans_not_now, wanted, canot_explore, canot_draw, canot_impulse, \
     canot_time, canot_life = OverView(data).get_data()
    draw, form, life, hash_map = DrawData(data).get_data()
    dimension_data = Dimension_Reduction(data, "data/location.csv").get_data()
    result = {
        "overview": {
            "plan_rate": count_have_plans,  # 有想法
            "already_rate": count_now_have,  # 已经培养了爱好
            "plan_not_doing_rate": count_have_plans_not_now,  # 有想法但没开始做
            "not_know_use_instrument_rate": canot_explore,  # 拿到一个乐器会不知所措的比例
            "no_thought_to_draw_rate": canot_draw,  # 没画画的想法的比例
            "no_impulse_for_art_rate": canot_impulse,  # 没探索其他艺术的冲动的比例
            "not_want_to_save_time_for_art_rate": canot_time,  # 不想省时间for艺术的比例
            "not_imagine_art_life_rate": canot_life,  # 没幻想过艺术家生活的比例

            "instrument_wants": wanted,  # 想学的乐器 {"吉他": 频数, ...}
        },
        "draw_data": {  # 都是dict {"xx": [编号], ...}
            "what_to_draw": draw,
            "form_of_art": form,
            "life_type": life,
            "hash_map": hash_map
        },
        "dimension_data": dimension_data    # { ${user_id}: 具体内容}
    }
    return json.dumps(result, ensure_ascii=False)


@app.route('/word_cloud', methods=['GET'])
def word_cloud():
    result = {}
    return result


@app.route('/what_to_draw', methods=['GET'])
def what_want_to_do():
    result = {"what_to_draw": 1}
    return result


@app.route('/what_to_live', methods=['GET'])
def what_to_live():
    result = {"what_to_live", 1}
    return result


@app.route('/art_form', methods=['GET'])
def art_form():
    result = {"art_form", 1}
    return result





@app.route('/user_detail/<int:user_id>')
def user_detail(user_id:int):
    result = {"user_id": user_id}
    return result


if __name__ == '__main__':
    # app.run(
    #     host="0.0.0.0",
    #     port=8000,
    #     debug=True
    # )
    print(1)
