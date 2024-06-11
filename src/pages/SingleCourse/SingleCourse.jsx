import React, { useEffect, useState } from 'react';
import './SingleCourse.css';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';
import { addCourse } from "../../redux/courseRedux";
import { useDispatch, useSelector } from "react-redux";

const SingleCourse = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [course, setCourse] = useState({});
  const [showSyllabus, setShowSyllabus] = useState(false);
  const dispatch = useDispatch();
  
  // Retrieve the list of enrolled courses from the Redux state
  const enrolledCourses = useSelector((state) => state.enrollments.courses);
  
  // Check if the course is already in the enrolled courses list
  const isAlreadyEnrolled = enrolledCourses.some((enrolledCourse) => enrolledCourse._id === course._id);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await publicRequest.get('/courses/' + id);
        setCourse(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCourse();
  }, [id]);

  const handleClick = () => {
    if (!isAlreadyEnrolled) {
      dispatch(addCourse(course)); // Dispatch the course object to add it to the state
    } else {
      console.log("Course is already enrolled.");
    }
  };

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };

  return (
    <div className="single_course">
      <div className="singleCourseThumbnail">
        <img src={course.img} className="singleCourseImg" alt={course.title} />
      </div>

      <div className="singleCourseInfo">
        <h1>{course.title}</h1>
        <h2>{course.instructor}</h2>
        <h4>{course.description}</h4>

        <div className="single_course_sec1">
          <div className="location">
            <h3>{course.location}</h3>
          </div>
          <div className="duration">
            <h3>{course.duration}</h3>
          </div>
        </div>

        <div className="single_course_sec2">
          <h3>Prerequisites:</h3>
          <ul>
            {course.prerequisites &&
              course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
          </ul>
        </div>

        <div className="single_course_sec3">
          <div className="single_course_btns">
            {showSyllabus ? (
              <div className="syllabusPopup">
                <ul>
                  {course.syllabus &&
                    course.syllabus.map((item) => (
                      <li key={item._id}>
                        <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                      </li>
                    ))}
                </ul>
                <button className="closeBtn" onClick={toggleSyllabus}>
                  Close
                </button>
              </div>
            ) : (
              <button className="syllabus" onClick={toggleSyllabus}>
                View Syllabus
              </button>
            )}
            <button
              className="enroll"
              onClick={handleClick}
              style={{
                backgroundColor: isAlreadyEnrolled ? '#914EC2' : 'black',
              }}
            >
              {isAlreadyEnrolled ? 'Enrolled' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
