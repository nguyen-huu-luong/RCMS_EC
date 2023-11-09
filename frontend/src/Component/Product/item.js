import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Item = () => {
    let item = { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 }
    const handelAddToCart = () => {
        toast.success("Add to cart successfully");
    }
    const numStar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [rate, setRate] = useState(0)
    const handelRate = (num) => {
        setRate(num)
    }
    return (
        <>
            <div className="d-flex justify-content-around mt-5 m-auto" style={{ paddingLeft: 300, paddingRight: 300 }}>
                <ToastContainer limit={1} />
                <div >
                    <img src={item['Image-URL-M']} width={300} height={400} />
                </div>
                <div >
                    <h5>{item['Book-Title']}</h5>
                    <div className='mt-3'>
                        {
                            numStar.map((item) => {
                                return (
                                    item > rate
                                        ? <AiFillStar onc style={{ marginTop: -30 }} color="rgb(192,192,192)" onClick={() => handelRate(item)} />
                                        : <AiFillStar style={{ marginTop: -30 }} color="#FFDF35" onClick={() => handelRate(item)} />
                                )
                            })
                        }
                    </div>
                    <h6>${item['Price']} USD</h6>
                    <div className="mt-3">
                        <p><span>ISBN: </span>{item['ISBN']}</p>
                        <p><span>Author: </span>{item['Book-Author']}</p>
                        <p><span>Publisher: </span>{item['Publisher']}</p>
                        <p><span>Publication year: </span>{item['Year-Of-Publication']}</p>
                    </div>
                    <div>
                        <p>Quantity: <input type="number" min={1} style={{ width: 50 }} defaultValue={1} className='m-auto' /></p>
                        <button className="btn btn-primary w-100" onClick={handelAddToCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;