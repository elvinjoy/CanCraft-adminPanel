import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'; 
import ViewOrders from './components/viewOrders/ViewOrders';
import ManageUsers from './components/manageUsers/ManageUsers';
import AddNewSizeRatio from './components/addNewSizeRatio/AddNewSizeRatio';
import Card4 from './components/card4/Card4';
import ViewOrderDashboard from './components/viewOrderDashboard/ViewOrderDashboard'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/vieworderdashboard' element={<ViewOrderDashboard />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/manageusers' element={<ManageUsers />} />
                <Route path='/addnewsizeratio' element={<AddNewSizeRatio />} />
                <Route path='/Card4' element={<Card4 />} />
            </Routes>
        </Router>
    );
}

export default App;
