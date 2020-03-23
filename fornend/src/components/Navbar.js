import React from 'react';

const Navbar  = () =>{
    return(
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">AppMini</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="#">Link</a></li>
          </ul>
          <button class="btn btn-danger navbar-btn">Button</button>
        </div>
      </nav>
    )
}
export default Navbar;