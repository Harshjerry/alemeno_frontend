import React, { useEffect, useState } from 'react';
import Courses from '../../components/Courses/Courses';
import { publicRequest } from "../../requestMethods";


const CourseList= () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await publicRequest.get("/courses/");
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCourses();
  }, []);

  return (
    <>
      {courses.length > 0 ? <Courses courses={courses} /> : <p>Loading...</p>}
    </>
  );
}

export default CourseList;
