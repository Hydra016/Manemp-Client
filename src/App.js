import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './features/userSlice'
import AddShop from './Pages/Shop/AddShop'
import ProtectedRoute from './Pages/Notfound'
import Error from './Pages/Notfound/Error'
import Myshops from './Pages/Shop/Myshops'
import Layout from './components/shared/Layout'
import Schedule from './Pages/Schedule'
import Shift from './Pages/Shifts'
import Employees from './Pages/Employees'
import Landing from './Pages/Landing'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import EmployeeDashboard from './Pages/EmployeeFlow/EmployeeDashboard'
import BusinessRequests from './Pages/Requests/BusinessRequests'
import EmployeeRequests from './Pages/Requests/EmployeeRequests'

function App() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="setup"
                        element={
                            <ProtectedRoute>
                                <Register />
                            </ProtectedRoute>
                        }
                    />

                    {user.role === 'business' && (
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute user={user}>
                                    <Layout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index path="/" element={<Dashboard />} />
                            <Route path="add-shop" element={<AddShop />} />
                            <Route path="my-shops" element={<Myshops />} />
                            <Route path="employees" element={<Employees />} />
                            <Route path="shifts" element={<Shift />} />
                            <Route path="schedule" element={<Schedule />} />
                            <Route path="requests" element={<BusinessRequests />} />
                        </Route>
                    )}

                    {user.role === 'employee' && (
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute user={user}>
                                    <Layout />
                                </ProtectedRoute>
                            }
                        >
                            <Route index path="/" element={<EmployeeDashboard />} />
                            <Route path="requests" element={<EmployeeRequests />} />
                        </Route>
                    )}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
