import React from 'react';
import "./Enrollment.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeCourse } from "../../redux/courseRedux";
import { useDispatch } from "react-redux";

const Enrollment = ({ course }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeCourse(course._id));
  };

  const isInitialCourse = course._id === 1; // Assuming the initial course has an _id of 1

  return (
    <div className='enrolled_course'>
      <div className='enroll_course_pic'>
        <img src={course.img} alt={course.title} />
      </div>
      <div className='enroll_course_info'>
        <div style={{ flex: '1.5' }}>
          <h2>{course.title}</h2>
        </div>
        <div className='i'>
          <h3>{course.instructor}</h3>
        </div>
        <div  className='i'>
          <h3>{course.location}</h3>
        </div>
      </div>
      
      <div className='enroll_course_progress'>
        <div>
          {!isInitialCourse && ( // Only render the delete icon if the course is not the initial course
            <DeleteIcon
              style={{ cursor: "pointer", color: "gray" }}
              onClick={handleDelete}
            />
          )}
        </div>
        <div className='i'>
          <img src="/graph.png" alt="Progress graph" />
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
