import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#F99D5A'}} className="d-flex justify-content-center align-items-center py-4">
                <div style={{width: "35%"}}>
                    <div className="d-flex justify-content-between w-50 m-auto">
                        <div><BsFacebook size={25}/></div>
                        <div><BiLogoInstagramAlt size={30}/></div>
                        <div><AiFillTwitterCircle size={25}/></div>
                    </div>
                    <div >
                        <div className="d-flex justify-content-between  w-50 m-auto pt-4">
                            <p className="text-white">Info</p>
                            <p className="text-white">Support</p>
                            <p className="text-white">Marketing</p>
                        </div>
                        <div className="d-flex justify-content-between w-50 m-auto">
                            <p className="text-white">Terms of Use</p>
                            <p className="text-white">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer