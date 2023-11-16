import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useNavigate } from "react-router-dom"

const Item = ({ id = 1 }) => {
    const cook = new Cookies();
    let user = cook.get('user')
    let navigate = useNavigate()
    const [item, setItem] = useState({})
    let quantity = useRef()
    const [rate, setRate] = useState(0)
    const numStar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    useEffect(() => {
        axios.get(`http://localhost:3003/book/${id}`)
            .then(res => {
                let book = res.data[0]
                console.log(book)
                setItem(book)

            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (user && id!=1) {
        axios.get(`http://localhost:3003/ratings?userId=${user}&&bookId=${id}`)
            .then(res => {
                let data = res.data
                if (data) {
                    setRate(data.rating)
                }
                else {
                    setRate(0)
                }

            })
            .catch(error => console.log(error));
        }
    }, [item]);
    const handelAddToCart = async () => {
        if (user) {
            let cartItem = { "user_id": user, "book_id": item.book_id, "quantity": parseInt(quantity.current.value) }
            await axios.post("http://localhost:3003/carts", cartItem)
            toast.success("Add to cart successfully");
        }
        else {
            navigate('/login')
        }
    }
    const handelRate = (num) => {
        if (user) {
            setRate(num)
            let data = {
                "userId": user,
                "bookId": id,
                "rating": num
            }
            axios.post("http://localhost:3003/ratings", data)
        }
        else {
            navigate('/login')
        }
    }
    return (
        <>
            <div className="d-flex justify-content-around mt-5 m-auto" style={{ paddingLeft: 300, paddingRight: 300 }}>
                <ToastContainer limit={1} />
                <div >
                    <img src={item['image_URL_M']} width={300} height={400} />
                </div>
                <div >
                    <h5>{item['book_title']}</h5>
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
                    {/* <div className='mt-3'>
                    {<RateDetail bookId={item['book_id']}/>}
                    </div> */}
                    <h6>${item['price']} USD</h6>
                    <div className="mt-3">
                        <p><span>ISBN: </span>{item['ISBN']}</p>
                        <p><span>Author: </span>{item['book_author']}</p>
                        <p><span>Publisher: </span>{item['publisher']}</p>
                        <p><span>Publication year: </span>{item['year_of_publication']}</p>
                    </div>
                    <div>
                        <p>Quantity: <input type="number" min={1} style={{ width: 50 }} defaultValue={1} className='m-auto' ref={quantity} /></p>
                        <button className="btn btn-primary w-100" onClick={handelAddToCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;