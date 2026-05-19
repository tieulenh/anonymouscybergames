import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// add css framework 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/index.css'

// add component to use
// common layout
import MainLayout from './layouts/mainLayout'
// special page
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
// content on layout
import GameList from './views/gameList'
import GameDetail from './views/gameDetail'
import GameManage from './views/gameManage/GameManage'
import HomeView from './views/homeView'

// 
import ProtectedRoute from './protectedRoute'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout content={<HomeView />} />} />
                <Route path="/games" element={<MainLayout content={<GameList />} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                <Route path="/games/:id" element={<MainLayout content={<GameDetail />} />} />
                <Route
                    path="/manage/games"
                    element={
                        <ProtectedRoute role="ADMIN">
                            <MainLayout content={<GameManage />} />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
