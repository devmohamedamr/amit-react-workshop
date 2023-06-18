import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Register() {
  const {register,handleSubmit} = useForm()
  const navigate = useNavigate()
  return (
      <>
       <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
              <h1>form <span className="badge bg-secondary">register</span></h1>

                <form onSubmit={handleSubmit(handleRegister)} className='form-group'>
                <div className="mb-3">
                    <label  className="form-label">name</label>
                    <input type="text" {...register("name")}  className="form-control" id="exampleFormControlInput1" />
                    <label   className="form-label">Email address</label>
                    <input type="email" {...register("email")}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <label   className="form-label">password</label>
                    <input type="password" {...register("password")}   className="form-control" id="exampleFormControlInput1" />
                    <input type="submit"  className="btn btn-success" id="exampleFormControlInput1" />
                  </div>
                </form>
              </div>
            </div>
          </div>
      
      </>
  )

  function handleRegister(data){
    axios.post("http://127.0.0.1:8000/api/register",data).then((res)=>{
      console.log(res)
      navigate("/login")
    })
  }
}
