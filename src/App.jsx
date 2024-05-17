import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'; 

const App = () => {
    return (
        <Router>
            <Dashboard />
        </Router>
    );
}

export default App;