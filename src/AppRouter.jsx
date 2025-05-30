import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import ClubsPage from './pages/ClubsPage';
import PrisesPage from './pages/PrisesPage';
import InstructorsPage from './pages/InstructorsPage';
import GoodsPage from './pages/GoodsPage';



export default function AppRouter() {

    return (

        <Router>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/clubs" element={<ClubsPage />} />
                    <Route path="/prises" element={<PrisesPage />} />
                    <Route path="/instructors" element={<InstructorsPage />} />
                    <Route path="/goods" element={<GoodsPage />} />

                </Route>

            </Routes>

        </Router>

    );

}
