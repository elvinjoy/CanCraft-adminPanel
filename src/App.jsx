import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import AddNewSizeRatio from './components/addNewSizeRatio/AddNewSizeRatio';
import ViewOrderDashboard from './components/viewOrderDashboard/ViewOrderDashboard';
import ViewOrders from './components/viewOrders/ViewOrders';
import ParticularOrder from './components/particularOrder/ParticularOrder';
import AdminLogin from './components/adminLogin/AdminLogin';
import UserProfile from './components/userProfile/UserProfile';
import AddManagers from './components/addmanagers/AddManagers';
import ManageManagers from './components/manageManagers/ManageManagers';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AdminLogin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/vieworderdashboard' element={<ViewOrderDashboard />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/particularorder/:id' element={<ParticularOrder />} />
                <Route path='/managemanagers' element={<ManageManagers />} />
                <Route path='/addnewsizeratio' element={<AddNewSizeRatio />} />
                <Route path='/addmanagers' element={<AddManagers />} />
                <Route path='/userprofile/:id' element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
