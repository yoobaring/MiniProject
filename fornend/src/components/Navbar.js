import React from 'react';

const Navbar  = () =>{
    return(
        <div>
            <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">หน้าหลัก</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="Emergency">แผนกฉุกเฉิน</a></li>
            <li><a href="Team">ทีมแพทย์แพทย์</a></li>
            <li class="active"><a href="Date">นัดหมายแพทย์</a></li>
            <li><a href="Contact">ติดต่อเรา</a></li>
          </ul>
          <button class="btn btn-danger navbar-btn"><a href="login">เข้าระบบ</a></button>
        </div>
      </nav>
        </div>
        
    )
}
export default Navbar;