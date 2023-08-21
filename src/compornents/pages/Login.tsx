import { FC, memo } from "react"
import { PrimaryButton } from "../button/PrimaryButton";

export const Login: FC = memo(() => {
    return (
        <div className="App">
            <div className="Login-box">
                <h1 className='Login-box-ttl'>LOGIN</h1>
                <div className="Login-box-input">
                    <div className="Login-box-input__block">
                        <p className="-txt">ID</p>
                        <input type="text" />
                    </div>
                    <div className="Login-box-input__block">
                        <p className="-txt">パスワード</p>
                        <input type="text" />
                    </div>
                </div>
                <PrimaryButton href="/booking_menu">ログイン</PrimaryButton>
            </div>
        </div>
    )
});