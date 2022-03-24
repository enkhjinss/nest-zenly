export const Verify = ({ setCode, verificationCode }) => {
    const onClick = () => {
        verificationCode();
    };
    return (
        <>
            <input
                type={"text"}
                placeholder="Please enter the code"
                onChange={(e) => {
                    setCode(e.target.value);
                }}
            />
            <button onClick={onClick}>Verify</button>
        </>
    );
};
