import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import '../App.css';
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
    
  

    const printStaffs = ()=>{
        if(staffs && staffs.length){
            return staffs.map((staff,index)=>{
                return(
                    <li key={index}>
                            id: {staff.id} ;
                            {staff.name}  {staff.surname  } ; position :
                            {staff.position} ; time : {staff.time} ; tell : {staff.tell}
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
            </ul>
        </div>
    )



}
export default Staff
