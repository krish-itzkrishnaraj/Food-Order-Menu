import React, { useEffect, useState } from 'react'
import { API_LINK } from '../Env';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 

function Read() {
 const [apiData, setApiData] = useState([]);
 const redirection = useNavigate();
 const getApiData = async()=>{
       await axios.get(API_LINK)
       .then((res)=>{
          setApiData(res.data)
       }).catch((err)=>{
          console.log(err);
       })
 }
 useEffect(()=>{
     getApiData();
 },[])

 
 const deleteData = async(id)=>{
     await axios.delete(API_LINK + id)
     .then((res)=>{
        console.log(res + "Deleted");
        getApiData();
     })
     .catch((err)=>{
       console.log(err);
     })
 }

 const UpdateData = ({id, firstName,lastName,email,phone,address,profile}) =>{
            redirection("/update");
            localStorage.setItem("id",id);
            localStorage.setItem("firstName",firstName);
            localStorage.setItem("lastName",lastName);
            localStorage.setItem("email",email);
            localStorage.setItem("phone",phone);
            localStorage.setItem("address",address);
            localStorage.setItem("profile",profile);
 }

 
 
  return (
    <div>
         <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                     <table className='table'>
                         <thead>
                            <tr>
                              <th>Emp Id</th>
                              <th>Date Created</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Address</th>
                              <th>Profile</th>
                              <th>Edit / Delete</th>
                            </tr>                            
                         </thead>
                         <tbody>
                              {
                                 apiData.map((res)=>(
                                     <tr key={res.id}>
                                        <td>{res.id}</td>
                                        <td>{res.createdAt}</td>
                                        <td>{res.firstName}</td>
                                        <td>{res.lastName}</td>
                                        <td>{res.email}</td>
                                        <td>{res.phone}</td>
                                        <td>{res.address}</td>
                                        <td>{res.profile}</td>
                                        <td>
                                            <button  className='btn btn-primary' onClick={()=>UpdateData(res)}>EDIT</button>
                                            <button className='btn btn-danger' onClick={()=>deleteData(res.id)}>DELETE</button>
                                        </td>
                                     </tr>
                                 ))
                              }
                         </tbody>
                     </table>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Read