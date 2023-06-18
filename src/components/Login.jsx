import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
export default function Login() {
  const {register,handleSubmit} = useForm()
  return (
      <>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
              <h1>form <span className="badge bg-secondary">login</span></h1>

                <form onSubmit={handleSubmit(handleLogin)} className='form-group'>
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" {...register("email")} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <label  class="form-label">password</label>
                    <input type="password" {...register("password")}  class="form-control" id="exampleFormControlInput1" />
                    <input type="submit" class="btn btn-success" id="exampleFormControlInput1" />
                  </div>
                </form>
              </div>
            </div>
          </div>
      </>
  )

  function handleLogin(data){
    axios.post("http://127.0.0.1:8000/api/login",data).then((res)=>{
      localStorage.setItem("amit_token",res.data.token)
    })
  }
}
