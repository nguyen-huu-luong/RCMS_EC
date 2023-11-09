import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Login = () => {

    let navigate = useNavigate()
    const handelSignIn = () => {
            navigate('/')
    }

    return (
        <>
            <div className="container-fluid w-50 ">
                <p className="mb-0 mt-4">Welcome back</p>
                <h3 >Log in to your account</h3>
                <form className="mt-4 mb-5" onSubmit={handelSignIn}>
                    <div className="mb-3">
                        <label for="userName" className="form-label">User name</label>
                        <input className="form-control" id="userName" name="username" />
                    </div>
                    <div className="mb-3">
                        <label for="passWord" className="form-label">Password</label>
                        <input className="form-control" id="passWord" type="password" name="password" />
                    </div>
                    <div className="row mb-3 m-0">
                        <div className="col-6 form-check ">
                            <input className="form-check-input" type="checkbox" value="" id="remember" />
                            <label className="form-check-label" for="remember" style={{ fontSize: "12px" }}>
                                Save information
                            </label>
                        </div>
                        <div className="col-6 p-0 d-flex justify-content-end">
                            <label className="mt-1 text-primary" style={{ fontSize: "12px", cursor: "pointer" }}>Forget password?</label>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: "#27485D" }}>Sign in</button>
                    </div>
                </form>
                <div className="mt-5 pt-5">
                    <p className="text-center ">Don't have an account? <Link to='/register'> <label className="text-primary pe-auto" style={{ cursor: "pointer" }}>Sign up</label> </Link> </p>
                </div>
            </div>

        </>
    )
}

export default Login