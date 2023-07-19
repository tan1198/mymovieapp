import React, { useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from '../FireBase';
import { collection, doc, setDoc, addDoc, getDocs, getDoc } from "firebase/firestore";
import { db } from '../FireBase';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { toast, useToast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';
import { authAction } from '../store/auth-slice';
const Login = () => {
    const DisPatch=useDispatch()
    const [isSignUp, setIsSignUp] = useState(false);
    const handleOnClick = () => {
        setIsSignUp(prevState => {
            return !prevState
        })
    }
    const navigate = useNavigate();
    const validator = Yup.object({
        email: Yup.string()
            .matches(('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'), "Email is not valid")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Your password must be 8 characters or more"),
    });


    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting, isSubmitted },
    } = useForm({ resolver: yupResolver(validator), mode: "onSubmit" });


    useEffect(() => {
        const arrayErrors = Object.values(errors);
        if (arrayErrors.length > 0) {
            console.log(arrayErrors)
            toast.error(arrayErrors[0]?.message, { pauseOnHover: false });
        }
    }, [errors]);

    const onSubmit = async (value) => {
        if (isSignUp) {
            try {
                const response = await createUserWithEmailAndPassword(auth, value.email, value.password)
                if (response) {
                    toast.success('Sign up successfuly')
                    navigate('/')
                    //DisPatch(authAction.setUserInfo(response));
                }
            } catch (error) {
                let errorMessage = error.message;

                if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error("The email already in use by an other user.");
                } else {
                    toast.error(errorMessage);
                }

            }


        }
        else {
            try {
                const response = await signInWithEmailAndPassword(auth, value.email, value.password)
                if (response) {
                    toast.success('Log In successfuly')
                    navigate('/')
                    //DisPatch(authAction.setUserInfo(response));
                }
            } catch (error) {
                let errorMessage = error.message;
                if (errorMessage === "Firebase: Error (auth/user-not-found).") {
                    toast.error("User not found");
                }
                if (errorMessage === "Firebase: Error (auth/wrong-password).") {
                    toast.error("Password is incorrect");
                }
                else {
                    toast.error(errorMessage);
                }

            }
            
        }


    }

    return (
        <>

            <div className="container-login container">
                <div className="screen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit(onSubmit)} className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input id='email' name='email' type="text" className="login__input" placeholder="User name / Email"
                                    {...register("email")}
                                />

                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input id='password' name='password' type="password" className="login__input" placeholder="Password"
                                    {...register("password")}
                                />

                            </div>
                            <button type='submit' className="button login__submit">
                                {isSignUp ? <span className="button__text">Sign Up</span> : <span className="button__text">Log In Now</span>}
                            </button>


                        </form>
                        {!isSignUp ?
                            <div class="social-login">
                                <h4>You don't have account</h4>

                                <Link onClick={handleOnClick} className="button__text">Create one</Link>

                            </div> :

                            <div class="social-login">

                                <Link onClick={handleOnClick} className="button__text">Log In</Link>

                            </div>
                        }
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login