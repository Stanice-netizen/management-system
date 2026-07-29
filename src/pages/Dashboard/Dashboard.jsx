import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CourseList from "../../components/CourseList/CourseList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import useCourses from "../../hooks/useCourses";
import useSearch from "../../hooks/useSearch";
import useFavorites from "../../hooks/useFavorites";

function Dashboard() {
  const { courses, loading, error } = useCourses();

  const { search, setSearch, filteredCourses } = useSearch(courses);

  const { toggleFavorite, isFavorite } = useFavorites();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-content">
          <SearchBar search={search} setSearch={setSearch} />

          <CourseList
            courses={filteredCourses}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </main>
      </div>
    </>
  );
}

export default Dashboard;
