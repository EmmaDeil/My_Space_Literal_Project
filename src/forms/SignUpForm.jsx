import React from 'react'

const SignUpForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle sign-up logic here
      alert('Sign-up form submitted!');
    }
  return (
    <div>
    <div className='logbox'>
      <form action="" className="justify-content-center align-items-center d-flex flex-column gap-3"
          onSubmit={handleSubmit}
          style={{ padding: "2rem" }}
      >
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder='Enter your email' required />
      <label htmlFor="username">Your Name:</label>
      <input type="text" id="username" name="username" placeholder='Enter your name' required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder='Enter your password' required />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" placeholder='Confirm your password' required />

      <button type="submit" id='signupbtn'>Sign Up</button>
      </form>
    </div>
    </div>
  )
}

export default SignUpForm;
