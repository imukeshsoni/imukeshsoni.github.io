import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Pages';

const App = () => {
    return (
        <main className='bg-slate-300/20 h-full'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </Router>
        </main>
    );
};

export default App;
