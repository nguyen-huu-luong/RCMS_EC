AI server for Recommendation tasks: Popularity-based, Item-based Collaborative Filtering and Content-based Collaborative Filtering

# Basic usage:

1. Install necessary packages:
```shell
pip install -r requirements.txt
```
2. Run the server (in Linux):
```shell
python3 index.py
```
3. API Requests: 
- Response body fields of GET requests: 
    - result: list of recommended books (empty list if cannot find book)
    - recommend: 
        - 1 if book is common.
        - 0 if book is rare/cannot found. In this case, recommend 10 random popular books instead.

- Example response:
```json
{
    "result": [
        {
            "book_id": 2143, 
            "ISBN": "059035342X", 
            "book_title": "Harry Potter and the Sorcerer's Stone (Harry Potter (Paperback))", 
            "book_author": "J. K. Rowling", 
            "year_of_publication": 1999, 
            "publisher": "Arthur A. Levine Books", 
            "image_URL_M": "http://images.amazon.com/images/P/059035342X.01.MZZZZZZZ.jpg", 
            "price": 41
        }, 
    ], 
    "recommend": 1
}
```

- GET request:
    - URL: http://127.0.0.1:5000/api/popularity
    - Description: Get 10 most popular books from all users ratings

- GET request:
    - URL: http://127.0.0.1:5000/api/item-based/:book_id
    - Description: Recommend with Item-based Collaborative Filtering based on **book_id**

- GET request:
    - URL: http://127.0.0.1:5000/api/content-based/:book_id
    - Description: Recommend with Content-based Collaborative Filtering based on **book_id**

