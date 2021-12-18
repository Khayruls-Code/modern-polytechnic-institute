import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import AddReview from "./Dashboard/AddReview/AddReview";
import AddTeacher from "./Dashboard/AddTeacher/AddTeacher";
import NewOrders from "./Dashboard/NewOrder/NewOrders";
import Profile from "./Dashboard/Profile/Profile";
import Students from "./Dashboard/Students/Students";
import Admission from "./pages/Admission/Admission";
import Blogs from "./pages/Blogs/Blogs";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import Header from './pages/shared/Header/Header'
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TeacherRoute from "./TeacherRoute/TeacherRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/courses/:courseId' element={
            <PrivateRoute><CourseDetails /></PrivateRoute>
          } />
          <Route path='/profile' element={
            <PrivateRoute><Profile /></PrivateRoute>
          } />
          <Route path='/addreview' element={
            <PrivateRoute><AddReview /></PrivateRoute>
          } />
          <Route path='/admission' element={
            <PrivateRoute><Admission /></PrivateRoute>
          } />
          <Route path='/neworder' element={
            <TeacherRoute><NewOrders /></TeacherRoute>
          } />
          <Route path='/students' element={
            <TeacherRoute><Students /></TeacherRoute>
          } />
          <Route path='/addteacher' element={
            <TeacherRoute><AddTeacher /></TeacherRoute>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
