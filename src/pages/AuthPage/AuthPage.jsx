import { useState } from "react";
import FSignUpForm from "../../components/SignUpForm/FSignUpForm";

export default function AuthPage({setUser}) {
    return (
        <main>
            <h1>AuthPage</h1>
            <p></p>
            <FSignUpForm setUser={setUser}/>
        </main>
    );
}
