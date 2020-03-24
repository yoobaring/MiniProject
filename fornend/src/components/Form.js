import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import '../App.css';
const Form  = () =>{

    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const staffs = useSelector(state => state.staff)
    const addStaff = async () => {
       await axios.post(`https://apistaffyoo-api.herokuapp.com/api/staffs`, form)
        dispatch({
            type: 'ADD_STAFF', staff: {
                id: staffs.length > 0 ? staffs[staffs.length-1].id+1 : 0,
                ...form
            }
        })
    }

    return(
     <div>
         
         <input
             type="text"
             placeholder="Enter name" 
             onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
            />
            
         <input
             type="text"
             placeholder="Enter surname" 
             onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
            />
            
            <input
             type="text"
             placeholder="Enter position" 
            onChange={(e) => dispatch({ type: 'CHANGE_POSITION', position: e.target.value })}
            />
            <input
             type="text"
             placeholder="Enter time" 
             onChange={(e) => dispatch({ type: 'CHANGE_TIME', time: e.target.value })}
            />
            <input
             type="number"
             placeholder="Enter tell" 
             onChange={(e) => dispatch({ type: 'CHANGE_TELL', tell: e.target.value })}
            />
            <span className="App2">
            <button className="btn1" onClick={addStaff}>ADD</button>
            </span>
     </div>
    )
}
export default Form;