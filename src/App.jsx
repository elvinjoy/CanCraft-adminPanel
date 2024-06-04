import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
// import ManageUsers from './components/manageUsers/ManageUsers';
import AddNewSizeRatio from './components/addNewSizeRatio/AddNewSizeRatio';
import ViewOrderDashboard from './components/viewOrderDashboard/ViewOrderDashboard';
import ViewOrders from './components/viewOrders/ViewOrders';
import ParticularOrder from './components/particularOrder/ParticularOrder';
import AdminLogin from './components/adminLogin/AdminLogin';
import AdminRegister from './components/adminRegister/AdminRegister';
import UserProfile from './components/userProfile/UserProfile';
import AddManagers from './components/addmanagers/AddManagers';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AdminRegister />} />
                <Route path='/login' element={<AdminLogin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/vieworderdashboard' element={<ViewOrderDashboard />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/particularorder/:id' element={<ParticularOrder />} />
                {/* <Route path='/manageusers' element={<ManageUsers />} /> */}
                <Route path='/addnewsizeratio' element={<AddNewSizeRatio />} />
                <Route path='/addmanagers' element={<AddManagers />} />
                <Route path="/userprofile/:id" element={<UserProfile /> }/>
            </Routes>
        </Router>
    );
}

export default App;
