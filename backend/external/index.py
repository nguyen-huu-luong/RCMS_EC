import pandas as pd
import joblib
import json
from flask import Flask
from flask_cors import CORS

from rcm_model import RCMModel

app = Flask(__name__)
CORS(app)

file_path =  "model/model.pkl"
with open(file_path, 'rb') as file:
    model = joblib.load(file)

@app.get('/api/popularity')
def popular_books():
    data = model.popular_books(10)
    data["result"] = data["result"].to_dict(orient="records")
    return json.dumps(data)

@app.get('/api/item-based/<id>')
def item_based(id):
    data = model.item_based_cf(int(id))
    data["result"] = data["result"].to_dict(orient="records")
    return json.dumps(data)

@app.get('/api/content-based/<id>')
def content_based(id):
    data = model.content_based_cf(int(id))
    data["result"] = data["result"].to_dict(orient="records")
    return json.dumps(data)

if __name__ == '__main__':
    app.run(debug=True)
