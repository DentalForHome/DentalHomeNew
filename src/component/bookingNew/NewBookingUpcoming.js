import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import ReactModal from "react-modal";
import NewBookingSelect from "./NewBookingSelect";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

function NewBookingUpcoming(props) {

  const[showModal,setShowModal] = useState(false)

const handleCloseModal = () => {
  setShowModal(false)
}
const handleOpenModal = () => {
  setShowModal(true)
}

  if (props.upcoming.length === 0) {
    return (
      <div className="booking-upcoming-container">
        <h1>Upcoming Appointments</h1>

        <table class="zigzag">
          <thead>
            <tr>
              {/* <div className="zigzag-head"> */}
              <th class="header">
                <div className="header-inner">
                  <div>Patient</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Dentist</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Location</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Date</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Time</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">
                <div className="header-inner">
                  <div>Status</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">Logo</th>
              {/* </div> */}
            </tr>
          </thead>
          <tbody>
            <tr> </tr>
          </tbody>
        </table>
        <div className="no-appointment">No Past Appointments</div>
      </div>
    );
  } else {
    return (
      <div className="booking-upcoming-container">
        <h1>Upcoming Appointments</h1>

        <table class="zigzag">
          <thead>
            <tr>
              {/* <div className="zigzag-head"> */}
              <th class="header">
                <div className="header-inner">
                  <div>Patient</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Dentist</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Location</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Date</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header table-none">
                <div className="header-inner">
                  <div>Time</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">
                <div className="header-inner">
                  <div>Status</div>
                  <div className="header-inner-icon">
                    <IoMdArrowDropup style={{ marginBottom: `-6px` }} />
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </th>
              <th class="header">Logo</th>
              {/* </div> */}
            </tr>
          </thead>
          <tbody bfcolor="red">
            {props.upcoming.map((data) => (
              <tr>
                <td>{data.patient_name}</td>
                <td className="table-none">{data.dentist_name}</td>
                <td className="table-none">{data.location}</td>
                <td className="table-none">{data.date.split("T")[0]}</td>
                <td className="table-none">{data.time.split(".")[0]}</td>
                <td
                  style={{
                    // display: `flex`,
                    // flexDirection: `row`,
                    // justifyContent: `space-around`,
                    // alignItems: `center`,
                    // height: `100%`,
                    // paddingTop: `10px`,
                    // paddintLeft:`3vw`
                    // textAlign:`center`
                    
                  }}
                >
                  <BsCheckCircleFill style={{ color: `yellow` }} />
                </td>
                <td style={{ paddingLeft: `30px` }}>
                  <BsThreeDotsVertical onClick={()=>handleOpenModal(data.id)}/>
                </td>
           
              </tr>
            ))}
          </tbody>
        </table>
        <ReactModal
                    isOpen={showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                    style={{
                      overlay: {
                        position: 'fixed',
                        // top: 0,
                        // left: 0,
                        // right: 0,
                        // bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.28)',
                        
                      },
                      content: {
                        position: 'absolute',
                        // top: '40px',
                        // left: '40px',
                        // right: '40px',
                        // bottom: '40px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '20px',
                        outline: 'none',
                        padding: '20px',
                        inset: 'auto'
                        
                        // width:'80vw'
                        // justifyContent: 'center',
                        // alignItems: 'center'
                      }
                    }}
                  >
                    <div className="modal-container">
                      <div className='modal-container-content'>
                        <div className="booking-top-container-title"><p>Edit your Appointment</p></div>
                        <div className="booking-top-container-close"><GrClose onClick={handleCloseModal} style={{height:`25px`,width:`25px`}}/></div>
                        </div>
                        <div className="booking-top-container-content edit">Please provide the following details</div>
                        <NewBookingSelect />
                    </div>
                    {/* <button onClick={handleCloseModal}>Close Modal</button> */}
                  </ReactModal>
      </div>
    );
  }
}

export default NewBookingUpcoming;
