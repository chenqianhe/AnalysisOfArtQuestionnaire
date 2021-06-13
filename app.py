from flask import Flask
from data_process.cqh_data_process import LoadData


app = Flask(__name__)


@app.route('/')
def main_page():
    data = LoadData()
    origin_data = data.load()
    return origin_data


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
