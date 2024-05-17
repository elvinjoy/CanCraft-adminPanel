import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'; 
import ViewOrders from './components/viewOrders/ViewOrders';
import ManageUsers from './components/manageUsers/ManageUsers';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/manageusers' element={<ManageUsers />} />
                {/* <Route path='/addnewsizeratio' element={<EditStaff />} /> */}
                {/* <Route path='/demon' element={<Demon />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
