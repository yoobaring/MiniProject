import React from 'react'
import Navbar from './Navbar'
import Staff from './Staff'


const Homepage  = () =>{
    return(
        <div>
            <Navbar/>
 
        <div className="slider-area">
  {/* Slider */}
  <div className="block-slider block-slider4">
    <ul className id="bxslider-home4">
      <li>
        <img src="img/h4-slide.png" alt="Slide" />
        <div className="caption-group">
          <h2 className="caption title">
            iPhone{" "}
            <span className="primary">
              6 <strong>Plus</strong>
            </span>
          </h2>
          <h4 className="caption subtitle">Dual SIM</h4>
          <a className="caption button-radius" href="single-product.html">
            <span className="icon" />
            Shop now
          </a>
        </div>
      </li>
      <li>
        <img src="img/h4-slide2.png" alt="Slide" />
        <div className="caption-group">
          <h2 className="caption title">
            by one, get one{" "}
            <span className="primary">
              50% <strong>off</strong>
            </span>
          </h2>
          <h4 className="caption subtitle">
            school supplies &amp; backpacks.*
          </h4>
          <a className="caption button-radius" href="single-product.html">
            <span className="icon" />
            Shop now
          </a>
        </div>
      </li>
      <li>
        <img src="img/h4-slide3.png" alt="Slide" />
        <div className="caption-group">
          <h2 className="caption title">
            Apple{" "}
            <span className="primary">
              Store <strong>Ipod</strong>
            </span>
          </h2>
          <h4 className="caption subtitle">Select Item</h4>
          <a className="caption button-radius" href="single-product.html">
            <span className="icon" />
            Shop now
          </a>
        </div>
      </li>
      <li>
        <img src="img/h4-slide4.png" alt="Slide" />
        <div className="caption-group">
          <h2 className="caption title">
            Apple{" "}
            <span className="primary">
              Store <strong>Ipod</strong>
            </span>
          </h2>
          <h4 className="caption subtitle">&amp; Phone</h4>
          <a className="caption button-radius" href="single-product.html">
            <span className="icon" />
            Shop now
          </a>
        </div>
      </li>
    </ul>
  </div>
  {/* ./Slider */}
</div>
<Staff/>
      
        </div>
    
    )
}
export default Homepage