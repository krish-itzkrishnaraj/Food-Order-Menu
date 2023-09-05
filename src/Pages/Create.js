import React, { useState } from 'react';
 import axios from "axios";
 import {API_LINK}  from '../Env';
 import { useNavigate } from 'react-router-dom';
function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");
  const [mesg, setMesg] = useState("");
const redirect = useNavigate();
const sendData= async(e)=>{
    setFirstName("");setLastName("");setEmail("");setPhone("");setAddress("");setProfile("")
      e.preventDefault();
      const formData = {firstName,lastName,email,phone,address,profile};
      await axios.post(API_LINK, formData)
      .then((res)=>{
       
         setTimeout(()=>{
             redirect("/read");           
         },1000)
         setMesg("Data Added.!!")

      }).catch((err)=>{
         console.log(err);
      })
      
  }

 
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <form onSubmit={sendData}>
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
                             <button type='submit' className='btn btn-success'>ADD DATA</button>
                        </div>
                       
                    </form>
                    <h4>{mesg}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create