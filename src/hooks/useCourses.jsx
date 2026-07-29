import { useEffect, useState } from "react";
import coursesData from "../data/courses";

function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setCourses(coursesData);
    } catch (err) {
      setError("Failed to load courses.");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    courses,
    loading,
    error,
  };
}

export default useCourses;
