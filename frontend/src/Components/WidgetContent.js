import React from "react";
import "./css/WidgetContent.css";
import { Route } from "react-router-dom";
import Shipment from "./Shipment";
function WidgetContent(){
  
    return(
      
        <div className="widget__contents">
             
            <div className="widget__content">
                <img src="https://cdn.pixabay.com/photo/2016/12/13/21/20/alien-1905155__340.png" className="img"/>
                <div className="widget__contentTitle">
                  <h5 onClick={()=>{
                    window.location.href="/Shipment"
                  }}>Make Shipment</h5>
                    {/* <p>The best mobile app development company</p> */}
                </div>
            </div>

        </div>
      
    )
}
export default WidgetContent;