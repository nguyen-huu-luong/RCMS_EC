import Carousel from 'react-bootstrap/Carousel';
import OverView from '../../Component/Product/overview';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {

    useEffect(() => {
        axios.get(` http://127.0.0.1:5000/api/popularity`)
            .then(res => {
                let books = res.data['result'].slice(0,8)
                setData(books)
            })
            .catch(error => console.log(error));
    }, []);
    const [data, setData] = useState([])

    return (
        <>
            <div className='d-flex justify-content-between'>
                <div style={{ display: 'block', width: "60%", padding: 30 }}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100 "
                                src="https://img.freepik.com/free-vector/flat-world-book-day-social-media-promo-template_23-2149298860.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais"
                                alt="Image One"
                                style={{ height: 300 }}
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://static.vecteezy.com/system/resources/previews/027/574/557/non_2x/back-to-school-sale-horizontal-banner-web-header-template-book-sale-poster-banner-template-for-promotion-with-stack-of-textbooks-globe-calculator-microscope-pencils-triangle-autumn-sale-vector.jpg"
                                alt="Image Two"
                                style={{ height: 300 }}
                            />
                        </Carousel.Item>
                    </Carousel>

                </div>
                <div style={{ paddingTop: 29 }}>
                    <img src="https://static.vecteezy.com/system/resources/previews/020/469/168/non_2x/lettering-black-friday-sale-banner-on-yellow-background-black-friday-sale-with-discount-for-art-template-design-brochure-style-banner-flyer-book-blank-card-poster-vector.jpg"
                        style={{ width: "95%", height: 300 }}
                    />
                </div>
            </div>
            <div style={{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className='d-flex justify-content-between'>
                <h3>Suggestion for you</h3>
                <Link style={{textDecoration: "none"}} to='/product'><p  className="text-primary pe-auto" style={{ cursor: "pointer" }}>View all products</p></Link>
                </div>
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
    )
}

export default Home;