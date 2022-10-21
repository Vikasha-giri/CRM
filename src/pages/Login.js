import React, { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"


const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const Login = () => {

    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        setError(null);
        const response = await axios
            .post("http://3.220.88.200:8009/api/agent_login", values)
            .catch((err) => {
                console.log(err.response.data.message)
                if (err && err.response) 
                setError(err.response.data.message);
            });

        if (response.data.status === "ok") {
        //    alert(response.data.message)   

           toast.success(response.data.message)       
           localStorage.setItem("user-info", JSON.stringify(response.data.data))
            navigate('/launchpad');          
           }else{
            setError(response.data.message);           
        }
    };

    const notify = () => toast("Wow so easy!");
        
    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });
    return (
        <section className="Login bg-primary vh-100 overflow-hidden ">
            <div className="h-100 overflow-auto login-content position-relative overflow-auto z-index-2">
                <div className="row g-0 px-xl-6 px-md-5 px-4 py-3 align-items-center h-100 justify-content-end me-xl-6">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                        <div className="card border-0 rounded-5">
                            <div className="card-body p-xl-5 p-4">
                                <h1 className="text-center h2 fw-semibold mb-lg-5 mb-4">Sign into your account</h1>
                                <form onSubmit={formik.handleSubmit} className="login-form">
                                    <div className="mb-3 mb-lg-4 pb-2">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control form-control-lg" id="email" placeholder="Your email address"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} autoComplete="off"
                                         />
                                         <p>
                                         {formik.touched.email && formik.errors.email ? formik.errors.email  : ""}
                                     </p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control form-control-lg" id="password" placeholder="The password you picked"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} autoComplete="off" />
                                        <p>
                                        {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                                    </p>
                                    </div>
                                    <p>{error ? error : ""}</p>
                                    <div className="text-end">
                                        <a href="#" className="ff-primary fw-medium">Forgot Password</a>
                                    </div>
                                    <div className="text-center mt-xl-5 mt-4 mb-lg-4 mb-3 pb-2">
                                       <button onClick={notify} disabled={!formik.isValid} type="submit" className="btn btn-primary btn-lg btn-md">Sign In</button>
                                    </div>
                                    
                                   
                                </form>

                                <p className="text-center small">By signing in you agree to our <a href="#" className="ff-primary fw-medium">Terms and Conditions</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Login