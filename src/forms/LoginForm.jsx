import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <div className='border p-4 m-4'>
      <form className='justify-content-center align-items-center d-flex flex-column gap-3' action="">
        <div className='mb-3'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Email Address' required />
        </div>
        <div className='mb-3'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder='*******' required />
        </div>
        <button type="submit" className='btn btn-primary' id='loginbtn'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default LoginForm;
