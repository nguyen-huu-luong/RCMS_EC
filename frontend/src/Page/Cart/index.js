import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import OverView from "../../Component/Product/overview";
const Cart = () => {
    let data = [{ 'Book-Title': "Classical Mythology", "Price": 100, "Quantity": 2, 'Total': 200 },
    { 'Book-Title': "The Mummies of Urumchi", "Price": 200, "Quantity": 2, 'Total': 400 }
    ]
    let navigate = useNavigate()
    const handelOrderMore = () => {
        navigate("/product")
    }

    const handelPayment = () => {
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
            <div className="d-flex justify-content-between mt-5 px-2">
                <div className="w-75">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Book Title</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr className="align-middle">
                                        <td>{item['Book-Title']}</td>
                                        <td>{item['Quantity']}</td>
                                        <td>{item['Price']} USD</td>
                                        <td>{item['Total']} USD</td>
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
                    <h6>Total Amount: 600 USD</h6>
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
        </>
    )
}

export default Cart