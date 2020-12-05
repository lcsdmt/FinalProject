import * as React from "react";

export class Usersignup extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props)
}

    handleSubmit(e: any) {
        e.preventDefault();
    }
    render(){ 
    return(
     <div>
        <h1>Login Page</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" placeholder="Username" />
            <button type="submit">Login</button></form>
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" placeholder="Password" />
            <button type="submit">Login</button></form>
    </div>
    )
    }
}
//if/else statement to signup/signin + login via singleclick that doesn't get sent to console