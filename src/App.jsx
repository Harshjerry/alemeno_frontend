import React from "react";
import CourseList from "./pages/CourseList/CourseList";
import SingleCourse from "./pages/SingleCourse/SingleCourse";
import Dashboard from "./pages/Dashboard/Dashboard";
import Front from "./pages/Front/Front";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
         <Navbar />
<Routes>
<Route path ="/" element={<Front/>} > </Route>
<Route path ="/courseList" element={<CourseList/>} > </Route>
<Route path="/courses/:id" exact element={<SingleCourse/>}></Route>
<Route path ="/dashboard" element={<Dashboard/>} > </Route>

</Routes>
</Router>
  )
}

export default App
