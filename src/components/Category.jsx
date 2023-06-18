import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function Category() {
    let [category,setCategory] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("amit_token") === null){
            navigate("/login")
        }
        getCategories()
    },[])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map((c)=>  <tr>
                                    <th scope="row">{c.id}</th>
                                    <td>{c.name}</td>
                                </tr>)}
                               
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

    function getCategories(){
        let token = localStorage.getItem("amit_token")
        // console.log(token)
        axios.get("http://127.0.0.1:8000/api/category",{headers:{Authorization:`Bearer ${token}`}}).then((res)=>{
            setCategory(res.data.data)    
        console.log(res.data.data)
        })
    }
}
