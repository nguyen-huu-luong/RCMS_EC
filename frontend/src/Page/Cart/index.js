import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import OverView from "../../Component/Product/overview";
import { useState, useEffect } from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';

const Cart = () => {
    let [data, setData] = useState([])
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
    let navigate = useNavigate()
    const handelOrderMore = () => {
        navigate("/product")
    }

    const handelPayment = () => {
        axios.delete(`http://localhost:3003/carts?userId=${user}`)
        navigate("/payment")
    }

    let relatedBook = [{ "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "The Mummies of Urumchi", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg", "Price": 200 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    ]

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
            <h6 className="mt-5" style={{textAlign: "center"}}>There is no product in your cart now.</h6>
            <div className="mt-3" style={{textAlign: "center"}}>
                <button className="btn btn-primary" onClick={handelOrderMore}>Continue Buying</button>
            </div>
        </div>
    }
        </>
    )
}

export default Cart