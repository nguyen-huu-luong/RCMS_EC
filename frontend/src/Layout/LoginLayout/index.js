import LoginImage from "../../Asset/LoginP.png"
import { useState, useEffect } from 'react';
const LoginLayout = ({ children }) => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);
    return (
        <>
            <div className="container-fluid row m-0 p-0 h-100 ">

                {
                    windowSize.width > 900 ?
                        <>
                            <div className="col-md-6 d-flex align-items-center justify-content-center position-relative">
                                <p className="position-absolute fw-bold fs-4" style={{ top: "20px", left: "20px", color: "#27485D" }}>WSC</p>
                                {children}
                            </div>
                            <div className="col-md-6 m-0 p-0 " style={{ height: "100vh" }}><img style={{ borderRadius: "0" }} className="w-100 h-100" src={LoginImage} /></div>
                        </>
                    : <>
                    <div className="col d-flex align-items-center justify-content-center position-relative " style={{height: "100vh"}}>
                                <p className="position-absolute fw-bold fs-4 " style={{ top: "20px", left: "20px", color: "#27485D" }}>WSC</p>
                                {children}
                            </div>
                    </>
                }

            </div>

        </>
    )
}

export default LoginLayout