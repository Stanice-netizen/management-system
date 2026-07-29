import { useState } from "react";

function useSearch(courses) {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    search,
    setSearch,
    filteredCourses,
  };
}

export default useSearch;
