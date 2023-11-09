import Success from "../../Asset/Success.png"
import { useNavigate } from "react-router-dom"

const Payment = () => {
    let navigate = useNavigate()

    const handelViewProduct = () => {
        navigate("/product")
    }

    return (
        <div className="border p-3 mt-5" style={{ textAlign: "justify", borderRadius: 10 }}>
            <div style={{textAlign: "center"}} className="my-4">
                <img src={Success} />
            </div>
            <div>
                <h4 style={{textAlign: "center"}} >MAKE PAYMENT SUCCESSFULLY</h4>
            </div>
            <div className="d-flex justify-content-center">
            <button onClick={handelViewProduct} className="btn btn-primary mt-3" >VIEW PRODUCTS</button>
            </div>
        </div>
    )
}

export default Payment