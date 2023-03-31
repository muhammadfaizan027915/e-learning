import Layout from './Components/Layout/Layout';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import AllCoursesPage from './Pages/AllcoursesPage'
import ContactPage from './Pages/ContactPage';
import CoursecartPage from './Pages/CoursecartPage'
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import CoursedetailPage from './Pages/CoursedetailPage';
import CheckoutPage from './Pages/CheckoutPage';
import Navigationbar from './Components/Navigationbar/Navigationbar';

function App() {

  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route element={<Layout />}>
          <Route path='signup' element={<SignupPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='courses' element={<AllCoursesPage />} />
          <Route path='contact-us' element={<ContactPage />} />
          <Route path='cart' element={<CoursecartPage/>} />
          <Route path='course-detail' element={<CoursedetailPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
        </Route>
    </Routes>
  );
}

export default App;
