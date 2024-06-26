import { useNavigate } from "react-router-dom"

const NotFound = () => {
    let navigate = useNavigate()
    const handelButton = () => {
        navigate('/login')
    }
    return (
        <>
            <div className="container ">
                <div className=" text-center mt-5">
                    <h1 className="mt-5" style={{ fontSize: "120px" }}>Oops !</h1>
                    <h3 className="mt-5">404 - PAGE NOT FOUND</h3>
                    <h6  >The page you are looking for might have been removed had its name changed or is temporarily unavailble</h6>
                    <button onClick={handelButton} className="btn mt-3" style={{ backgroundColor: "#27485D", color: "white" }}>GO TO HOMEPAGE</button>
                </div>
            </div>
        </>
    )
}

export default NotFound