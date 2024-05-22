import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import { Home } from './Pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </Router>
        </main>
    );
};

export default App;
