import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import OverView from "../../Component/Product/overview";
import { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';

const Cart = () => {
    let [data, setData] = useState([])
    let [relatedBook, setRelatedBook] = useState([])
    const cook = new Cookies();
    let user = cook.get('user')
    let [total, setTotal] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:3003/carts?userId=${user}`)
            .then(res => {
                let items = res.data
                setData(items)
                let sum = 0
                for (let item in data) {
                    sum += data[item].price
                }
                setTotal(sum)
            })
    },)
    useEffect(() => {
        if (data.length == 1) {
            console.log(data.length)
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[0].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 8)
                    setRelatedBook(books)
                    console.log(data)
                    console.log(books)
                })
                .catch(error => console.log(error));
        }
        else if (data.length == 2) {
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[0].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 4)
                    cook.set("related", books)
                })
                .catch(error => console.log(error));
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[1].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 4)
                    console.log("before")
                    console.log(books)
                    books = books.concat(cook.get('related'))
                    console.log(books)
                    setRelatedBook(books)
                    console.log(books)
                })
                .catch(error => console.log(error));
        }
        else if (data.length == 3) {
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[0].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 3)
                    cook.set("related1", books)
                })
                .catch(error => console.log(error));
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[1].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 3)
                    // books = books.concat(cook.get('related'))
                    cook.set("related2", books)
                })
                .catch(error => console.log(error));
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[2].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 2)
                    console.log(books)
                    console.log(cook.get('related1'))
                    books = books.concat(cook.get('related1'))
                    books = books.concat(cook.get('related2'))
                    console.log(books)
                    setRelatedBook(books)
                    console.log(books)
                })
                .catch(error => console.log(error));
        }
        else if (data.length >= 4) {
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[0].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 2)
                    cook.set("relate3", books)
                })
                .catch(error => console.log(error));
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[1].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 2)
                    cook.set("related4", books)
                })
                .catch(error => console.log(error));
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[2].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 2)
                    cook.set("related5", books)
                })
                .catch(error => console.log(error));
            axios.get(`http://127.0.0.1:5000/api/item-based/${data[3].book_id}`)
                .then(res => {
                    let books = res.data['result'].slice(0, 2)
                    books = books.concat(cook.get('related3'))
                    books = books.concat(cook.get('related4'))
                    books = books.concat(cook.get('related5'))
                    console.log(books)
                    setRelatedBook(books)
                    console.log(books)
                })
                .catch(error => console.log(error));
        }
    }, [total])
    let navigate = useNavigate()
    const handelOrderMore = () => {
        navigate("/product")
    }
    // useEffect(() => {
    //     window.location.reload(true)
    // }, [relatedBook])
    const handelPayment = () => {
        axios.delete(`http://localhost:3003/carts?userId=${user}`)
        navigate("/payment")
    }

    // let relatedBook = [{ "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // { "ISBN": '0195153448', 'Book-Title': "The Mummies of Urumchi", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg", "Price": 200 },
    // { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    // ]

    return (
        <>
            {
                total > 0
                    ? <div>
                        <div className="d-flex justify-content-between mt-5 px-2">
                            <div className="w-75">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Book Title</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item) => {
                                            return (
                                                <tr className="align-middle">
                                                    <td>{item['book_title']}</td>
                                                    <td>{item['quantity']}</td>
                                                    <td>{item['price']} USD</td>
                                                    <td><button className="border-0" style={{ background: "transparent" }} data-toggle="tooltip" title="Remove">
                                                        <CiCircleRemove color="red" size={20} />
                                                    </button></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="m-auto border p-3" style={{ textAlign: "justify", borderRadius: 10 }}>
                                <h6>Total Amount: {total} USD</h6>
                                <div className="d-flex justify-content-center"><button onClick={handelOrderMore} className="btn btn-warning mt-4" style={{ width: 145 }}>ORDER MORE</button></div>
                                <div className="d-flex justify-content-center"><button onClick={handelPayment} className="btn btn-primary mt-3" style={{ width: 145 }}>MAKE PAYMENT</button></div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h4>
                                Related Books
                            </h4>
                            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>

                                {
                                    relatedBook.map((item) => {
                                        return (
                                            <>
                                                <OverView item={item} />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h6 className="mt-5" style={{ textAlign: "center" }}>There is no product in your cart now.</h6>
                        <div className="mt-3" style={{ textAlign: "center" }}>
                            <button className="btn btn-primary" onClick={handelOrderMore}>Continue Buying</button>
                        </div>
                    </div>
            }
        </>
    )
}

export default Cart