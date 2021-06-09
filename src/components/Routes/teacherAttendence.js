import React,{useState} from "react";
import "../../Styles/teacherAttendence.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function TeacherAttendence(){
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="main-div">
            <h1>Take Staff Attendence</h1>
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
            <Link to="/teacherattendence2">
                <Button  style={{backgroundColor:"#011B53" ,   borderRadius : "20px"}}>Take Attendence</Button>{' '}
            </Link>
            

        </div>
    )
}

export default TeacherAttendence;