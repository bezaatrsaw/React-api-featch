import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css';


function Form() {
  //state for regestration
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // state for checking errors
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowsuccess] = useState("")
  const [valid, setValid] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

  }, [valid, showSuccess])

  function Submit(e) {

    e.preventDefault();
    const data = { username, email, password }
    handleSubmit(data)
    console.log(data)
    if (valid) {
      setShowsuccess(true)
      setTimeout(() => {
        setShowsuccess(false)
      }, 3000)
    }
    else {
      setShowsuccess(false)
    }

    navigate('/posts')

  }


  const handleSubmit = (values) => {
    if (values.userName && values.email && values.password) {
      setValid(true);
    }
    setSubmitted(true)
  }





  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3> { } successfully registered!!</h3>
      </div>
    );
  };



  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };


  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        {showSuccess && <div>success!Thankyou for registering</div>}

        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <input
          value={username} type='text' name='username' placeholder="username" required onChange={(e) => setUserName(e.target.value)} />

        {!username && <span id="user-name-error"> enter a username</span>}

        <input
          value={email} type='text' name='email' onChange={(e) => setEmail(e.target.value)} placeholder="email" required />

        {!email && <span id="email-error">Please enter a email</span>}

        <input value={password} type='password' name='password' placeholder="password" required onChange={(e) => setPassword(e.target.value)} />

        {!password && <span id="password-error">Please enter a password</span>}

        <button type='button' onClick={(e) => Submit(e)} >Submit</button>
      </form>

    </div>



  )
}
export default Form;