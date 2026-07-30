import { useEffect, useState } from "react";
import { getCourses } from "../services/api";

function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
  };
}

export default useCourses;
