import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_LINK } from '../Env';
import { useNavigate } from 'react-router-dom';
function Update() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");
  const [mesg, setMesg] = useState("");
  const redirect = useNavigate()

  useEffect(()=>{
           setId(localStorage.getItem("id"));
           setFirstName(localStorage.getItem("firstName"));
           setLastName(localStorage.getItem("lastName"));
           setEmail(localStorage.getItem("email"));
           setPhone(localStorage.getItem("phone"));
           setAddress(localStorage.getItem("address"));
           setProfile(localStorage.getItem("profile"));
  },[])

  const updateData = async(e)=>{
    e.preventDefault();
       await axios.put(API_LINK + id, {
          firstName,lastName,email,phone,address,profile
       })
       .then((data)=>{          
          setMesg("Data updated successfully");
          setTimeout(()=>{
            redirect("/read")
          },1000)
       })
       
  }
  return (
    <div>
        <div className='container'>
            <div className='row'>
               <div className='col-md-6 offset-md-3'>
                 
                   <form onSubmit={updateData}>
                        <div className='form-groupo mb-3'>
                            <input className='form-control' type='text' placeholder='Enter Firstname' onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                        </div>
                        <div className='form-groupo mb-3'>
                            <input className='form-control' type='text' placeholder='Enter Lastname' onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                        </div>
                        <div className='form-groupo mb-3'>
                            <input className='form-control' type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                        </div>
                        <div className='form-groupo mb-3'>
                            <input className='form-control' type='text' placeholder='Enter Phone Number' onChange={(e)=>setPhone(e.target.value)} value={phone} />
                        </div>
                        <div className='form-groupo mb-3'>
                            <input className='form-control' type='text' placeholder='Enter Address' onChange={(e)=>setAddress(e.target.value)} value={address} />
                        </div>
                        <div className='form-groupo mb-3'>
                            <input className='form-control' type='text' placeholder='Enter Profile' onChange={(e)=>setProfile(e.target.value)} value={profile} />
                        </div>
                        
                        <div className='form-group'>
                             <button type='submit' className='btn btn-success'>UPDATE DATA</button>
                        </div>
                       
                    </form>
                    <h2>{mesg}</h2>
              
               </div>
            </div>
        </div>
    </div>
  )
}

export default Update