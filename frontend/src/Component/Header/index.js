import Logo from "../../Asset/logo.png"
import Avatar from "../../Asset/avatar.png"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'

const Header = () => {

    let navigate = useNavigate()
    const handelButtonAbout = () => {
        navigate('/about')
    }
    const handelHomeButton = () => {
        navigate('/')
    }
    const handelProductButton = () => {
        navigate('/product')
    }
    const handelLogout = () => {
        navigate('/login')
    }
    const handelCart = () => {
        navigate('/cart')
    }
    return (
        <>
            <div className="d-flex justify-content-between align-items-center sticky-top" style={{ backgroundColor: '#F99D5A' }}>
                <div className="d-flex justify-content-between w-25 mx-3">
                    <div><img src={Logo} /></div>
                    <div className="d-flex justify-content-between align-items-center w-75">
                        <div><button className="border-0 text-white " style={{ backgroundColor: '#F99D5A' }} onClick={handelHomeButton}>Home</button></div>
                        <div><button className="border-0 text-white font-weight-bold" style={{ backgroundColor: '#F99D5A' }} onClick={handelProductButton}>Product</button></div>
                        <div><button className="border-0 text-white" style={{ backgroundColor: '#F99D5A' }} onClick={handelButtonAbout}>About us</button></div>
                    </div>
                </div>
                <div className="d-flex justify-content-end w-50 mx-4 align-items-center">
                    <div >
                        <form>
                            <div style={{ position: "relative" }}>
                                <input className="form-control" style={{ width: 400 }} placeholder="Enter your book"></input>
                                <button className="border-0 bg-white " style={{ position: "absolute", top: 4, right: 10 }}>
                                    <AiOutlineSearch size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mx-4" style={{ cursor: "pointer" }}>
                    <button style={{ display: "inline-block", backgroundColor: "#F99D5A" }} className="border-0" onClick={handelCart}>    <AiOutlineShoppingCart size={25} /> </button>
                    </div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{ display: "inline-block", backgroundColor: "#F99D5A" }} className="border-0">
                                <img style={{ width: 30 }} src={Avatar} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handelLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header