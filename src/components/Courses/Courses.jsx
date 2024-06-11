import React from 'react';
import './Courses.css';
import Course from '../Course/Course';

const Courses = ({ courses }) => {
  return (
    <div className='Course_section'>
      <div className='courses'>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
