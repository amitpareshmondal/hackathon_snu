import Rect from "react";
import QuoraHeader from "./QuoraHeader";
import logo from "./customer.png";
import business from "./business.png";
import "./css/Shipment.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
function Shipment(){
    return(
        <div>
           <QuoraHeader/>
           <div class="box-container">
  <div class="box"><img src={logo}/>
  <br/><b >Customer</b>
  </div>
  <div class="box">
  <img src={business}/>
  <br/><b >Business</b>
  </div>
</div>

        </div>
    )
}

export default Shipment;