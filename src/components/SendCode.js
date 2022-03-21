import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it';

export const SendCode = () => {
    return (
        <>
            <input type={"text"} placeholder="hi" />
            <button>Send Code</button>
        </>
    );
};
