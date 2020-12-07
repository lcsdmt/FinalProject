import { Handler } from "express";
import * as React from "react";
import { useState, useEffect } from "react"

const Usersignup: React.FC = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let res = await fetch("/auth/register/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": ""
                },
                body: JSON.stringify({ email, password })
            }
        )

        if (res.ok) {
            console.log(res)
        } else {
            console.log("Something went wrong")
        }
    }

    return (
        <>
            <div>
                <h1>Signup Page</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Signup</button></form>
            </div>
        </>
    )

}

export interface ISignUpState {
    email: string,
    password: string
};

export default Usersignup;

//if/else statement to signup/signin + login via singleclick that doesn't get sent to console