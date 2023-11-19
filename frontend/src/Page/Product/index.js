import ResponsivePagination from "react-responsive-pagination";
import { useState, useEffect } from "react";
import OverView from "../../Component/Product/overview";
import axios from 'axios';

const Product = () => {
    useEffect(() => {
        axios.get(`http://localhost:3003/books`)
            .then(res => {
                let books = res.data
                setData(books)
            })
            .catch(error => console.log(error));
    }, []);
    const [data, setData] = useState([])

    const [itemOffset, SetOffset] = useState({ offset: 0, current: 0 });
    const itemPerPage = 16
    const endOffset = itemOffset.offset + itemPerPage;
    const book = data.slice(itemOffset.offset, endOffset);
    const countPage = Math.ceil(data.length / itemPerPage);
    const handelPagination = (event) => {
        const newOffset = ((event - 1) * itemPerPage) % data.length;
        SetOffset({ offset: newOffset, current: event });
    };

    return (
        <>
            <div className="mt-3">
                <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}>

                    {
                        book.map((item) => {
                            return (
                                <>
                                    <OverView item={item} />
                                </>
                            )
                        })
                    }
                </div>
                <div
                    className="row d-flex flex-sm-row flex-column w-100 justify-content-between align-items-center m-0 gap-1"
                    id="bottome"
                >
                    <div
                        className="col d-flex flex-row w-100 justify-content-md-start justify-content-center align-items-center gap-md-3 gap-2"
                        id="bottom-left"
                    >
                        <p style={{ color: "#6C757D" }}>
                            Showing {book.length} of {data.length} books
                        </p>
                    </div>
                    <div
                        className="col d-flex flex-row w-100 justify-content-md-end justify-content-center align-items-center"
                        id="bottom-right"
                    >
                        <ResponsivePagination
                            current={itemOffset.current}
                            total={countPage}
                            onPageChange={handelPagination}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;