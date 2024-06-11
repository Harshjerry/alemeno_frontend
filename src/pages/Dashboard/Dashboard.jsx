import React from 'react'
import "./Dashboard.css";
import Enrollment from '../../components/Enrollment/Enrollment';
import { useSelector, useDispatch } from "react-redux";
import { addCourse, removeCourse } from '../../redux/courseRedux';

const Dashboard = () => {
    const enrollments = useSelector((state) => state.enrollments);
    const dispatch = useDispatch();

    return (
        <div className='dashboard'>
            
            <div className='student_profile'>
                <div className='student_thumbnail'>
                    <img src="/student.png" className='student_img' alt="Student Thumbnail" />
                </div>
                <div className='student_info'>
                    <h1>Adrian Brewer</h1>
                    <h2>Information Technology student whose calling is turning ideas into products</h2>
                    <h4 className='city'>New York, United States</h4>
                </div>
            </div>


            <h1 className='enroll_head'>Enrollments</h1>
            <div className='enrollments'>
                {enrollments.courses.map((course) => (
                    <Enrollment key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard
