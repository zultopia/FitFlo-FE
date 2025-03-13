import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import LoginPage from "@/pages/login";
import MilestonesPage from "@/pages/milestones";
import RegisterPage from "@/pages/register";
import Dashboard from "@/pages/dashboard";
import ForgetPasswordPage from "@/pages/forgetpassword";
import ProfilePage from "@/pages/profile";
import PersonalCarePage from "@/pages/personalcare";
import PathwayPlannerPage from "@/pages/pathwayplanner";
import HealthcarePage from "@/pages/healthcare";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<ForgetPasswordPage />} path="/forgetpassword" />
      <Route element={<MilestonesPage />} path="/milestones" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<PersonalCarePage />} path="/personal-care" />
      <Route element={<PathwayPlannerPage />} path="/pathway" />
      <Route element={<HealthcarePage />} path="/healthcare" />
    </Routes>
  );
}

export default App;
