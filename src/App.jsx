import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import AddNewSizeRatio from './components/addNewSizeRatio/AddNewSizeRatio';
import ViewOrderDashboard from './components/viewOrderDashboard/ViewOrderDashboard';
import ViewOrders from './components/viewOrders/ViewOrders';
import ParticularOrder from './components/particularOrder/ParticularOrder';
import AdminLogin from './components/adminLogin/AdminLogin';
import ManagerLogin from './components/managerLogin/ManagerLogin';
import UserProfile from './components/userProfile/UserProfile';
import AddManagers from './components/addmanagers/AddManagers';
import ManageManagers from './components/manageManagers/ManageManagers';
import AdminRegister from './components/adminRegister/AdminRegister';
import AllSizeRatios from './components/allRatios/AllRatios';
import CreatePrice from './components/createPrice/CreatePrice';
const App = () => {
    return (    
        <Router>
            <Routes>
                <Route path='/register' element={<AdminRegister />} />
                <Route path='/login' element={<AdminLogin />} />
                <Route path='/' element={<ManagerLogin />} />
                <Route path='/dashboard' element={<Dashboard />} />
                {/* <Route path='/vieworderdashboard' element={<ViewOrderDashboard />} /> */}
                <Route path='/vieworders' element={<ViewOrders />} />
                <Route path='/particularorder/:id' element={<ParticularOrder />} />
                <Route path='/managemanagers' element={<ManageManagers />} />
                <Route path='/addnewsizeratio' element={<AddNewSizeRatio />} />
                <Route path='/addmanagers' element={<AddManagers />} />
                <Route path='/userprofile/:id' element={<UserProfile />} />
                <Route path='/allratios' element={<AllSizeRatios />} />
                <Route path='/createprice' element={<CreatePrice />} />
            </Routes>
        </Router>
    );
}

export default App;
