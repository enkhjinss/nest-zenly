import { SendCode } from "./SendCode";
// import { Verify } from "./Verify";
import { useState , useEffect , useRef } from "react";
// import { getAuth, RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";



export const LoginContainer = () => {
    const [value , setValue] = useState();

    return (
        <div className="loginContainer flex column align-center justify-center">
            <SendCode newPhoneNumber={ newPhoneNumber }/>
        </div>
    );
};
