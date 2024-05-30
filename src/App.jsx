import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ManageUsers from './components/manageUsers/ManageUsers';
import AddNewSizeRatio from './components/addNewSizeRatio/AddNewSizeRatio';
import Card4 from './components/card4/Card4';
import ViewOrderDashboard from './components/viewOrderDashboard/ViewOrderDashboard';
import ViewOrders from './components/viewOrders/ViewOrders';
import ParticularOrder from './components/particularOrder/ParticularOrder';
import AdminLogin from './components/adminLogin/AdminLogin';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/register' element={<Dashboard />} /> */}
                <Route path='/' element={<AdminLogin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/vieworderdashboard' element={<ViewOrderDashboard />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/particularorder/:id' element={<ParticularOrder />} />
                <Route path='/manageusers' element={<ManageUsers />} />
                <Route path='/addnewsizeratio' element={<AddNewSizeRatio />} />
                <Route path='/card4' element={<Card4 />} />
            </Routes>
        </Router>
    );
}

export default App;
