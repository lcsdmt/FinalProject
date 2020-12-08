import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { formInput, formGroupWrapper } from './helper';
// import { useDispatch } from 'react-redux';
// import { login } from '../../config/session';

const UserLogin: React.FC = () => {
  //   const dispatch = useDispatch();
  const hist = useHistory();
  const [Submitted, setSubmitted] = useState(false);
  const [Error, setError] = useState("");
  const [UserDetails, setUserDetails] = useState(
    {
      email: "",
      password: ""
    }
  );
  const login = (dto = {}) => {
    // let baseUrl = "http://localhost:55960/"; // TODO: code this into ENV file
    let apiPath = "/auth/login";
    // let tryToken = `Basic ${btoa(email + ":" + password)}`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    };
    return fetch(apiPath, requestOptions)
      .then(response => {
        if (response.ok) {
          // login successful
          let res = response.json();
          //   sessionStorage.setItem("AUTH_TOKEN", tryToken);
          return [response, res];
        }
        return response;
      })
      .catch(err => console.error(err));
  }
  const handleInputChange = (e, key) => {
    let { value } = e.target;
    let input = { ...UserDetails };
    input[key] = value;
    setUserDetails(input);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = UserDetails;
    await setSubmitted(true);
    if (email !== "" && password !== "") {
      let dto: object = { email, password }
      let response = await login(dto);
      //console.log("REEEESPONSE", response);

      if (response[0] && response[0].ok) {
        await response[1].then(user => {
          //console.log("USER", user);
          sessionStorage.setItem("USER_ID", JSON.stringify(user.userid));
          sessionStorage.setItem("USER_ROLE", JSON.stringify(user.role));
          sessionStorage.setItem("AUTH_TOKEN", JSON.stringify(user.token));
          //   dispatch({type: "LOG_IN", payload: JSON.stringify(user[0]) });
        });
        hist.push("/");
        location.reload();
        alert("Login Success!");
      } else {
        setError("Invalid email or password");
      }
    }
  }

  const cardContent = () => {
    let { email, password } = UserDetails;
    return (
      <form name="form"
        onSubmit={handleSubmit}
      >
        {formGroupWrapper("email", formInput("email", email, handleInputChange, Submitted))}
        {formGroupWrapper("password", formInput("password", password, handleInputChange, Submitted))}
        <div className="form-group">
          <button
            className="btn btn-primary">Login</button>
        </div>
        {Error &&
          <div className={'alert alert-danger'}>{Error}</div>
        }
      </form>
    )
  }

  return (
    <div className="login container">
      <div className="login full-card">
        <div className="login card">
          <div className="card-header">
            <h5 className="card-title">Login</h5>
          </div>
          <div className="card-body">
            {cardContent()}
          </div>
        </div>
      </div>
    </div>
  )
};
export default UserLogin;