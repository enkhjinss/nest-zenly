import { SendCode } from "./SendCode";
import { Verify } from "./Verify";
import { useState, useEffect, useRef } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

export const LoginContainer = () => {
    const [code, setCode] = useState("");
    const [isStep1, setIsStep1] = useState(true);
    const recaptchaVerifier = useRef();
    const confirmationResult = useRef();

    useEffect(() => {
        recaptchaVerifier.current = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
    }, []);

    const newPhoneNumber = async ({ phoneNumber }) => {
        confirmationResult.current = await signInWithPhoneNumber(
            auth,
            "+976" + phoneNumber,
            recaptchaVerifier.current
        );
        setIsStep1(false);
    };

    const verificationCode = async () => {
        await confirmationResult.current.confirm(code);
        console.log("success");
    };

    return (
        <div className="loginContainer flex column align-center justify-center">
            <div id="recaptcha-container"></div>
            {isStep1 ? (
                <SendCode newPhoneNumber={newPhoneNumber} />
            ) : (
                <Verify setCode={setCode} verificationCode={verificationCode} />
            )}
        </div>
    );
};
