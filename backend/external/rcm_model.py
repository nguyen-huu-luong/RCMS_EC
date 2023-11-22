import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class RCMModel(object):
  def __init__(self, df, books_df):
    self.df = df
    self.books_df = books_df
    self.n = 10

  def popular_books(self):
    res = popular_books(self.df, self.n)
    res["result"] = res["result"].merge(self.books_df, on="book_id")
    return res

  def item_based(self, book_id):
    res = item_based(self.df, self.books_df, book_id, m=self.n)
    return res
  
def popular_books(df, n=10):
    rating_count=df.groupby("book_id").count()["rating"].reset_index()
    rating_count.rename(columns={"rating":"number_of_ratings"},inplace=True)

    rating_average=df.groupby("book_id")["rating"].mean().reset_index()
    rating_average.rename(columns={"rating":"average_ratings"},inplace=True)

    popularBooks=rating_count.merge(rating_average,on="book_id")

    def weighted_rate(x):
        v=x["number_of_ratings"]
        R=x["average_ratings"]

        return ((v*R) + (m*C)) / (v+m)

    C=popularBooks["average_ratings"].mean()
    m=popularBooks["number_of_ratings"].quantile(0.90)

    # popularBooks=popularBooks[popularBooks["number_of_ratings"] >=250]
    popularBooks["popularity"]=popularBooks.apply(weighted_rate,axis=1)
    popularBooks=popularBooks.sort_values(by="popularity",ascending=False)
    return_df = popularBooks[["book_id","number_of_ratings","average_ratings","popularity"]].reset_index(drop=True).head(n)

    return {"result": return_df, "recommend": 1}

def item_based(df, books_df, bookId, m=10):
  if bookId in books_df["book_id"].values:
    index=books_df[books_df["book_id"]==bookId]["index"].values[0]
    similarity=cosine_similarity(np.transpose((fill_matrix(df, books_df)[0])))
    similar_books=list(enumerate(similarity[index]))
    similar_booksSorted=sorted(similar_books,key=lambda x:x[1],reverse=True)[1:(1+m)]

    recommend_books = books_df[books_df['index'].isin([x[0] for x in similar_booksSorted])]
    return {"result": recommend_books.head(m), "recommend": 1}
  else:
    print("COULD NOT FIND BOOK")
    return {"recommend": 0}
  
def fill_matrix(df, books_df):
  utility_matrix = build_utility_matrix(df)
  similar_indexes = similar_content_books(books_df, 10)
  fill_count = 0

  for (index_x, index_y), value in np.ndenumerate(utility_matrix):
    if value != 0: 
      continue
    total_sum = 0
    count = 0
    for book_index in similar_indexes[index_y]:
      if utility_matrix[index_x, book_index] != 0:
        total_sum += utility_matrix[index_x, book_index]
        count += 1
    if count != 0:
      utility_matrix[index_x][index_y] = total_sum / count
      fill_count += 1

  return utility_matrix, fill_count

def build_utility_matrix(df, rows=100, cols=1000):
  utility_matrix = np.zeros((rows, cols))

  for _, row in df.iterrows():
    index_x = row['index_x']
    index_y = row['index_y']
    rating = row['rating']
    utility_matrix[index_x, index_y] = rating

  def normalization(matrix):
    non_zero_mask = matrix != 0
    row_sums = np.sum(matrix, axis=1, keepdims=True)
    row_counts = np.sum(non_zero_mask, axis=1, keepdims=True)
    row_averages = np.divide(row_sums, row_counts, where=row_counts != 0)
    normalized_matrix = np.where(non_zero_mask, matrix - row_averages, 0)
    return normalized_matrix

  return normalization(utility_matrix)

def similar_content_books(df, m=10):
  new_df=df.copy()
  targets=["book_title","book_author","publisher"]
  new_df["all_features"] = [" ".join(new_df[targets].iloc[i,].values) for i in range(new_df[targets].shape[0])]

  vectorizer=CountVectorizer()
  new_dfVector=vectorizer.fit_transform(new_df["all_features"])
  similarity=cosine_similarity(new_dfVector)

  result={}
  for index in new_df["index"].values:
    similar_books=list(enumerate(similarity[index]))
    similar_booksSorted=sorted(similar_books,key=lambda x:x[1],reverse=True)[1:(1+m)]
    result[index] = [x[0] for x in similar_booksSorted]
  
  return result