import { useState } from "react";

export const SendCode = ({ newPhoneNumber }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const onClick = () => {
        newPhoneNumber({ phoneNumber: phoneNumber });
    };
    return (
        <>
            <input
                type={"text"}
                placeholder="Please enter the phone number"
                onChange={(e) => {
                    setPhoneNumber(e.target.value);
                }}
            />
            <button onClick={onClick}>Send Code</button>
        </>
    );
};
