import React from "react";
import "./Auth.css";
import { Button } from "@/components/ui/button";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="h-screen relative authContainer">
            <div className="absolute inset-0 bg-black/50">
                
                <div className="bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black/5 backdrop-blur-md shadow-2xl shadow-white">
                <h1 className="text-6xl font-bold pb-9 text-white">Crypto Shastra</h1>

                {location.pathname=="/signup" ?<section className="text-white w-full">
                    <SignupForm />
                    <div className="flex items-center justify-center mt-4">
                        <span>
                            Already have an account?
                        </span>
                        <Button className="ml-1 text-white"
                        onClick={() => navigate("/signin")} variant="link">
                            Sign In

                        </Button>

                    </div>
                </section>: location.pathname=="/forgot-password" ?<section><ForgotPasswordForm/>
                
                <div className="flex items-center justify-center mt-3 text-white">
                        <span>
                            back to login?
                        </span>
                        <Button className="ml-1 text-white"
                        onClick={() => navigate("/signin")} variant="link">
                            Sign In

                        </Button>

                    </div>
                
                </section>:<section><SigninForm/>
                
                <div className="flex items-center justify-center mt-4 text-white">
                        <span>
                            Don't have an account?
                        </span>
                        <Button className="ml-1 text-white" 
                        onClick={() => navigate("/signup")} variant="link">
                            Sign Up

                        </Button>

                    </div>
                    <div className="">
                       
                        <Button className="w-full mt-4 text-white"
                        onClick={() => navigate("/forgot-password")}
                        variant="link">
                            Forgot Password?

                        </Button>

                    </div>
                
                </section>}
                </div>
            </div>                
        </div>
        
    );
}
export default Auth;