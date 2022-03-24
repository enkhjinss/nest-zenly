import { getAuth, RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";
import { useEffect } from "react";

const RecaptchaVerifier = useRef();

useEffect(() => {
    const auth = getAuth();
    RecaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container' , {} , auth);
}, [])
const onClick = () => {
    const auth = getAuth();
    auth.languageCode = "it";
}
export const SendCode = ({ newPhoneNumber }) => {
    return (
        <>
            <input type={"text"} placeholder="Please enter the phone number" onChange={ (e) => {setValue(e.target.value)} } />
            <button onClick={ onClick }>Send Code</button>
        </>
    );
};
