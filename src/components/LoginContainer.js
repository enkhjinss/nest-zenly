import { SendCode } from "./SendCode";
import { Verify } from "./Verify";

export const LoginContainer = () => {
    return (
        <div className="loginContainer flex column align-center justify-center">
            <SendCode />
        </div>
    );
};
