// src/redux/courseRedux.js
import { createSlice } from "@reduxjs/toolkit";

const initialCourse = {
    _id: 1,
    img: "/eyes.jpg",
    title: "INTRODUCTORY COURSE",
    cat: "general",
    instructor: "John Doe",
    description: "This is a mandatory course that covers essential topics.",
    enrollmentStatus: "Open",
    duration: "4 weeks",
    schedule: "Mondays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["None"],
    likes:"52",
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mandatory Course",
        content: "Overview of the mandatory course and its importance.",
      },
      {
        week: 2,
        topic: "Core Concepts",
        content: "Understanding the fundamental concepts covered in the course.",
      },
      // Additional weeks and topics...
    ],
  };
  
  const CourseSlice = createSlice({
    name: "enrollments",
    initialState: {
      courses: [initialCourse],
      total: 1, // Initial total set to 1
    },
    reducers: {
      addCourse: (state, action) => {
        state.courses.push(action.payload);
        state.total += 1;
      },
      removeCourse: (state, action) => {
        const courseId = action.payload;
        const existingCourseIndex = state.courses.findIndex(course => course._id === courseId);
        
        if (existingCourseIndex !== -1) {
          state.courses.splice(existingCourseIndex, 1);
          state.total -= 1;
        }
      },
    },
  });
  
  export const { addCourse, removeCourse } = CourseSlice.actions;
export default CourseSlice.reducer;
