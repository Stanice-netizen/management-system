import CourseCard from "../CourseCard/CourseCard";

function CourseList({ courses }) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      ))}
    </div>
  );
}

export default CourseList;
