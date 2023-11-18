import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class RCMModel(object):
  def __init__(self, df):
    self.df = df

  def popular_books(self, n=10):
    return popular_books(self.df, n)

  def item_based_cf(self, book_id):
    return item_based(self.df, book_id)

  def content_based_cf(self, book_id):
    return content_based(self.df, book_id)
  
def popular_books(df, n=10):
    book_titles = df[['book_id', 'book_title']].drop_duplicates()

    rating_count=df.groupby("book_id").count()["rating"].reset_index()
    rating_count.rename(columns={"rating":"number_of_ratings"},inplace=True)

    rating_average=df.groupby("book_id")["rating"].mean().reset_index()
    rating_average.rename(columns={"rating":"average_ratings"},inplace=True)

    popularBooks=book_titles.merge(rating_count.merge(rating_average,on="book_id"),on="book_id")

    def weighted_rate(x):
        v=x["number_of_ratings"]
        R=x["average_ratings"]

        return ((v*R) + (m*C)) / (v+m)

    C=popularBooks["average_ratings"].mean()
    m=popularBooks["number_of_ratings"].quantile(0.90)

    popularBooks=popularBooks[popularBooks["number_of_ratings"] >=250]
    popularBooks["popularity"]=popularBooks.apply(weighted_rate,axis=1)
    popularBooks=popularBooks.sort_values(by="popularity",ascending=False)
    return popularBooks[["book_id","book_title","number_of_ratings","average_ratings","popularity"]].reset_index(drop=True).head(n)

def item_based(df, bookId):
    book_titles = df[['book_id', 'book_title']].drop_duplicates()

    if bookId in df["book_id"].values:
        rating_count=pd.DataFrame(df["book_id"].value_counts())
        rare_books=rating_count[rating_count["book_id"]<=100].index
        common_books=df[~df["book_id"].isin(rare_books)]

        if bookId in rare_books:
            most_common=pd.DataFrame(pd.Series(common_books["book_id"].unique()).sample(3), columns=["book_id"])
            print("No Recommendations for this Book \n ")
            print("YOU MAY TRY: \n ")
            return most_common.merge(book_titles,on="book_id").head()
        else:
            common_books_pivot=common_books.pivot_table(index=["user_id"],columns=["book_id"],values="rating")
            title=common_books_pivot[bookId]
            recommendation_df=pd.DataFrame(common_books_pivot.corrwith(title).sort_values(ascending=False)).reset_index(drop=False)

            if bookId in [title for title in recommendation_df["book_id"]]:
                recommendation_df=recommendation_df.drop(recommendation_df[recommendation_df["book_id"]==bookId].index[0])

            less_rating=[]
            for i in recommendation_df["book_id"]:
                if df[df["book_id"]==i]["rating"].mean() < 5:
                    less_rating.append(i)
            if recommendation_df.shape[0] - len(less_rating) > 5:
                recommendation_df=recommendation_df[~recommendation_df["book_id"].isin(less_rating)]

            recommendation_df=recommendation_df[0:5]
            recommendation_df.columns=["book_id","correlation"]

            return recommendation_df.merge(book_titles,on="book_id").head()
    else:
        print("COULD NOT FIND BOOK")

def content_based(df, bookId):
    book_titles = df[['book_id', 'book_title']].drop_duplicates()
    bookTitle = str(df[df['book_id'] == bookId]["book_title"].tolist()[0])

    if bookTitle in df["book_title"].values:
        rating_count=pd.DataFrame(df["book_title"].value_counts())
        rare_books=rating_count[rating_count["book_title"]<=100].index
        common_books=df[~df["book_title"].isin(rare_books)]

        if bookTitle in rare_books:
            most_common=pd.DataFrame(pd.Series(common_books["book_title"].unique()).sample(3), columns=["book_title"])
            print("No Recommendations for this Book \n ")
            print("YOU MAY TRY: \n ")
            return book_titles.merge(most_common,on="book_title").head()
        else:
            common_books=common_books.drop_duplicates(subset=["book_title"])
            common_books.reset_index(inplace=True)
            common_books["index"]=[i for i in range(common_books.shape[0])]
            targets=["book_title","book_author","publisher"]
            common_books["all_features"] = [" ".join(common_books[targets].iloc[i,].values) for i in range(common_books[targets].shape[0])]

            vectorizer=CountVectorizer()
            common_booksVector=vectorizer.fit_transform(common_books["all_features"])
            similarity=cosine_similarity(common_booksVector)
            index=common_books[common_books["book_title"]==bookTitle]["index"].values[0]
            similar_books=list(enumerate(similarity[index]))
            similar_booksSorted=sorted(similar_books,key=lambda x:x[1],reverse=True)[1:6]

            recommend_books = common_books[common_books['index'].isin([x[0] for x in similar_booksSorted])]

            return recommend_books.head()
    else:
        print("COULD NOT FIND BOOK")