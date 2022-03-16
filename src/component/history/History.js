import React, { useEffect, useState } from "react";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";

import HistoryTop from "./HistoryTop";
import HistoryCount from "./HistoryCount";
import NewBookingSelect from "../bookingNew/NewBookingSelect";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";
import NewBookingPast from "../bookingNew/NewBookingPast";
import axios from "axios";

function History() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  const[upcoming,setUpcoming] = useState([])
  const[past,setPast] = useState([])
  const userData = JSON.parse(localStorage.getItem("testObject"));

  const[refresh,setRefresh] = useState(false)

  useEffect(async()=>{
   await axios.get('https://homedentist.in/api/appointment/'+ userData.id).then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(res.data[0])
        res.data.map((dat)=>{
          if(dat.status === "completed"){
            setPast(past => [...past, dat]);
          } else {
            setUpcoming(upcoming => [...upcoming, dat]);
          } 
        })
      }

    })
    // setRefresh(false)
  },[])

  return (
    <div>
      {width > 800 ? <Sidebar /> : <Navbar />}
      <HistoryTop />
      <div className="history-container">
        
        <HistoryCount />
        <NewBookingSelect setUpcoming={setUpcoming} setPast={setPast}/>
        <NewBookingUpcoming upcoming={upcoming}/>
        <NewBookingPast past={past}/>
      </div>
    </div>
  );
}

export default History;
