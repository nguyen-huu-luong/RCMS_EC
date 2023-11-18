import pandas as pd
import pickle
from flask import Flask
from flask_cors import CORS

from rcm_model import RCMModel

app = Flask(__name__)
CORS(app)

file_path =  "model/model.pkl"
with open(file_path, 'rb') as file:
    model = pickle.load(file)

@app.get('/api/popularity')
def popular_books():
    popular_df = pd.DataFrame(model.popular_books(10))
    popular_books = popular_df.to_json(orient='records')

    return popular_books

@app.get('/api/item-based/<id>')
def item_based(id):
    rcm_df = pd.DataFrame(model.item_based_cf(int(id)))
    rcm_books = rcm_df.to_json(orient='records')

    return rcm_books

@app.get('/api/content-based/<id>')
def content_based(id):
    rcm_df = pd.DataFrame(model.content_based_cf(int(id)))
    rcm_books = rcm_df.to_json(orient='records')

    return rcm_books

if __name__ == '__main__':
    app.run(debug=True)
