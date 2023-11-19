import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai";
import { Cookies } from 'react-cookie';
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const OverView = ({ item }) => {
    const cook = new Cookies();
    let user = cook.get('user')
    let navigate = useNavigate()
    const numStar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [rate, setRate] = useState(0)
    useEffect(() => {
        if (user && item['book_id']) {
        axios.get(`http://localhost:3003/ratings?userId=${user}&&bookId=${item['book_id']}`)
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
    const handelRate = (num) => {
        if (user) {
            setRate(num)
            let data = {
                "userId": user,
                "bookId": item['book_id'],
                "rating": num
            }
            axios.post("http://localhost:3003/ratings", data)
        }
        else {
            navigate('/login')
        }
    }
    const handelDetail = () => {
        navigate(`/product/${item['book_id']}`)
        window.location.reload(true)
    }
    return (
        <>
            <div className="px-2 my-3" style={{ width: 310, height: 200 }} >
                <div className=" py-2 d-flex justify-content-between px-2 " style={{ border: "1px solid green", display: "inline-block", borderRadius: 10, width: 310, height: 200 }}>
                        <div style={{ cursor: "pointer", height: "100%" }} onClick={handelDetail}>
                            <img src={item['image_URL_M']} style={{ width: "90%", height: "100%" }} />
                        </div>
                    <div style={{ width: "70%", position: "relative" }} >
                        <p style={{ textAlign: "justify", fontWeight: "bold", width: "90%" }}>{item['book_title']}</p>
                        <div >
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
                        <p style={{ marginTop: -10 }}>${item.price} USD</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OverView