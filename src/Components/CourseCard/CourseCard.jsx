import { useNavigate } from "react-router";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const navigate = useNavigate();

function CourseCard({ course, toggleFavorite, isFavorite }) {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />

      <div className="course-info">
        <h3>{course.title}</h3>

        <p>{course.instructor}</p>

        <p>{course.difficulty}</p>

        <p>{course.students} Students</p>

        <button onClick={() => navigate(`/course/${course.id}`)}>
          View Details
        </button>

        <FavoriteButton
          courseId={course.id}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      </div>
    </div>
  );
}

export default CourseCard;
