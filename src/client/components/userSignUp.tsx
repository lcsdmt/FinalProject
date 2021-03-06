import { Handler } from "express";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import login from './login';

const Usersignup: React.FC = (props) => {
    const hist = useHistory();
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
            console.log(res);
            hist.push("/");
            location.reload();
            alert("Profile Created!");
        } else {
            console.log("Something went wrong")
        }
        login
    }

    return (
        <>
            <div style={{ color: "silver", display: "flex", justifyContent: "center" }}>
                <form
                    style={{ margin: "2em" }}
                    onSubmit={
                        handleSubmit
                    } >
                    <div className="form-group" style={{ margin: "2em" }}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <small id="emailHelp" className="form-text text-bold" style={{ color: "white" }}>We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group" style={{ margin: "2em" }}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-check" style={{ margin: "2em" }}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                    </div>
                    <button className="btn btn-primary" style={{marginLeft: "3em"}} type="submit">Submit</button>
                </form>
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