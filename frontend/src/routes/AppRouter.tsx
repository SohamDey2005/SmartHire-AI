import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "../pages/shared/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import Dashboard from "../pages/candidate/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import TestAPI from "../pages/shared/TestAPI";
import ProtectedRoute from "../components/common/ProtectedRoute";
import LoginPage from "../pages/auth/LoginPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/recruiter"
                    element={<RecruiterDashboard />}
                />

                <Route
                    path="/test"
                    element={<TestAPI />}
                />

            </Routes>
        </BrowserRouter>
    );
}