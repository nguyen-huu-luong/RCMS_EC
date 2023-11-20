import Item from "../../Component/Product/item"
import OverView from "../../Component/Product/overview"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFound from "../NotFound";
const Details = () => {
    const { id } = useParams();
    useEffect(() => {
        console.log(id)
        axios.get(`http://127.0.0.1:5000/api/item-based/${id}`)
            .then(res => {
                let books = res.data['result'].slice(0, 8)
                setData(books)
            })
            .catch(error => console.log(error));
    }, []);
    const [data, setData] = useState([])
    const [item, setItem] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:3003/book/${id}`)
            .then(res => {
                let book = res.data[0]
                setItem(book)

            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            {!item && (
                <NotFound />
            )}
            {!!item && (
                <>
                    <Item item={item} />
                    <div className="mt-5">
                        <h4>
                            Related Books
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>

                            {
                                data.map((item) => {
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
            )}
        </>
    )
}

export default Details