
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceList = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        axios.get('/api/attendance')
            .then(response => {
                setAttendance(response.data);
            })
            .catch(error => {
                console.error('Error fetching attendance:', error);
            });
    }, []);

    return (
        <div>
            <h1>Student Attendance</h1>
            <ul>
                {attendance.map(item => (
                    <li key={item._id}>{item.studentName} - {item.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceList;
