import React from 'react';

const Navbarlogin  = () =>{
    return(
        <div>
            <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li class="active"><a href="schedule">ตารางเวร</a></li>
            <li class="active"><a href="scheduleWork">แลกเวร</a></li>
          </ul>
          <button class="btn btn-danger navbar-btn"><a href="login">ออกจากระบบ</a></button>
        </div>
      </nav>
        </div>
        
    )
}
export default Navbarlogin;