import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import '../App.css';
import Form from './Form';
const Staff=(props)=>{


    const staffs = useSelector(state=> state.staff);
    const form = useSelector(state => state.form)
    const dispatch = useDispatch()
     useEffect(()=>{
        getStaffs();
     },[])

     const getStaffs = async () => {
        const result = await axios.get(`https://apistaffyoo-api.herokuapp.com/api/staffs`)
        console.log(result.data)
        const action = {type:'GET_STAFF',staff: result.data}
        dispatch(action)
      }
      
      const deleteStaff = async (staffs_id)=>{
        await axios.delete(`https://apistaffyoo-api.herokuapp.com/api/staffs/${staffs_id}`)
        dispatch({type:'DELETE_STAFF',id: staffs_id })
        getStaffs();
          
    }
    const updateStaff = async (staffs_id) => {
        await axios.put(`https://apistaffyoo-api.herokuapp.com/api/staffs/${staffs_id}`,form)
         dispatch(
             {type:'UPDATE_STAFF',
             id: staffs_id,
             staff:{...form, id:  staffs_id}
         })
         getStaffs();
         
       }


  

    const printStaffs = ()=>{
        if(staffs && staffs.length){
            return staffs.map((staff,index)=>{
                return(
                    <li key={index}>
                            id: {staff.id} ;
                            {staff.name}  {staff.surname  } ; position :
                            {staff.position} ; time : {staff.time} ; tell : {staff.tell}
                            <button onClick={ ()=>deleteStaff(staff.id)}>Delete</button>
                            <button onClick={ ()=>updateStaff(staff.id)}>Update</button>
                    </li> 
                )
            })
        }
        else{
            return(<h1>No data</h1>)
        }
    }


    return(
        <div>
             <ul>
                {printStaffs()}
                <Form/>
            </ul>
        </div>
    )



}
export default Staff
