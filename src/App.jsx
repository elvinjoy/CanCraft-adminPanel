import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <Dashboard />
        </Router>
    );
}

export default App;