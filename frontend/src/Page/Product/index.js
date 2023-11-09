import ResponsivePagination from "react-responsive-pagination";
import { useState } from "react";
import OverView from "../../Component/Product/overview";
const Product = () => {

    let data = [{ "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0393045218', 'Book-Title': "The Mummies of Urumchi", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0393045218.01.MZZZZZZZ.jpg", "Price": 200 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    { "ISBN": '0195153448', 'Book-Title': "Classical Mythology", "Book-Author": "Mark P. O. Morford", "Year-Of-Publication": 2002, "Publisher": "Oxford University Press", "Image-URL-M": "http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg", "Price": 100 },
    ]

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