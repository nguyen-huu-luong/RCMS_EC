import axios from "axios"
import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"
const Register = () => {
    let navigate = useNavigate()
    const handelSignUp = async (event) => {
        event.preventDefault()
        let userName = event.target.userName.value
        let password = event.target.password.value
        let confirm = event.target.confirm.value
        if (userName == "" || password == "" || confirm == "" ) {
            alert("Please enter the valid information")
        }
        else if (password != confirm) {
            alert("Password and confirm password do not match")
        }
        else {
        
        await axios.post("http://localhost:3003/users/register", {"userName": userName, "password": password})
            .then(res => {
                let result= res.data
                if (result != "success") {
                    alert(result)
                }
                else {
                    navigate('/login')
                }
            })
        }
    }

    return (
        <>
            <div className="container-fluid w-50 ">
                <h4 className="mt-4">Sign up now!</h4>
                <form className="mt-4 mb-5" onSubmit={handelSignUp}>
                    <div className="mb-3">
                        <label for="userName" className="form-label">User name</label>
                        <input className="form-control" id="userName" name="username" />
                    </div>
                    <div className="mb-3">
                        <label for="passWord" className="form-label">Password</label>
                        <input className="form-control" id="passWord" type="password" name="password" />
                    </div>
                    <div className="mb-3">
                        <label for="confirm" className="form-label">Confirm password</label>
                        <input className="form-control" id="confirm" type="password" name="confirm" />
                    </div>
                    <div className="col-12 mt-5">
                        <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#27485D" }}>Sign up</button>
                    </div>
                </form>
                <div className="mt-3 ">
                    <p className="text-center ">Do you have an account? <Link to="/login"> <label className="text-primary pe-auto" style={{ cursor: "pointer" }}> Sign in</label> </Link>  </p>
                </div>
            </div>

        </>
    )
}

export default Register