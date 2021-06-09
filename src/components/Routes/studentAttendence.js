import React,{useState} from "react";
import "../../Styles/studentAttendence.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function StudentAttendence(){
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="main-div">
            <h1>Take Student Attendence</h1>
            <hr />
            <p>Attendence Date :</p>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showYearPicker
                dateFormat="yyyy"
            />
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MMMM"
                showMonthYearPicker
                showFullMonthYearPicker
            />
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                 showDatePicker
                dateFormat="dd"
                adjustDateOnChange
            />
            <p>Class :</p>
            <input type="number" />
            <p>Subject :</p>
            <input type="text" />
            <Link to="/studentattendence2">
                <Button  style={{backgroundColor:"#011B53" ,   borderRadius : "20px"}}>Take Attendence</Button>{' '}
            </Link>

        </div>
    )
}

export default StudentAttendence;