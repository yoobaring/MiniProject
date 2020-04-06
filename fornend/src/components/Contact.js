import React from 'react'
import Navbar from './Navbar'
import Staff from './Staff'



const Contact  = () =>{

    return(
        <div>
            <Navbar/>
            
            <input
            type="text"
            placeholder="ชื่อ"
            /><br/>
            <input
            type="text"
            placeholder="นามสกุล"
            /><br/>
            <input
            type="text"
            placeholder="อีเมล์"
            /><br/>
            <input
            type="text"
            placeholder="เบอร์มือถือ"
            /><br/>
            <input
            type="text"
            placeholder="รายละเอียด"
            /><br/>

            <button>ส่ง</button>
            
    
        </div>
    
    )
}
export default Contact