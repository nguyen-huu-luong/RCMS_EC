import { Link } from "react-router-dom"
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const OverView = ({ item }) => {
    const numStar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [rate, setRate] = useState(0)
    const handelRate = (num) => {
        setRate(num)
    }
    return (
        <>
            <div className="px-2 my-3" style={{ width: 310, height: 200 }} >
                <div className=" py-2 d-flex justify-content-between px-2 " style={{ border: "1px solid green", display: "inline-block", borderRadius: 10, width: 310, height: 200 }}>
                    <Link to={`/product/${item['ISBN']}`}>
                        <div style={{ cursor: "pointer", height: "100%" }}>
                            <img src={item['Image-URL-M']} style={{ width: "90%", height: "100%" }} />
                        </div>
                    </Link>
                    <div style={{ width: "70%", position: "relative" }} >
                        <p style={{ textAlign: "justify", fontWeight: "bold", width: "90%" }}>{item['Book-Title']}</p>
                        <div >
                            {
                                numStar.map((item) => {
                                    return (
                                        item > rate
                                            ? <AiFillStar onc style={{ marginTop: -30 }} color="rgb(192,192,192)" onClick={() => handelRate(item)} />
                                            : <AiFillStar style={{ marginTop: -30 }} color="#FFDF35" onClick={() => handelRate(item)}/>
                                    )
                                })
                            }
                        </div>
                        <p style={{ marginTop: -10 }}>${item.Price} USD</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OverView