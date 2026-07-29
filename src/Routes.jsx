import { Routes, Route } from "react-router";

import Dashboard from "./pages/Dashboard/Dashboard";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import NotFound from "./pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;