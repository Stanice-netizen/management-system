import { useParams, useNavigate } from "react-router";
import courses from "../../data/courses";

function CourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  if (!course) {
    return <h2>Course not found.</h2>;
  }

  return (
    <div className="details">

      <img
        src={course.image}
        alt={course.title}
      />

      <h1>{course.title}</h1>

      <p>
        <strong>Instructor:</strong>
        {course.instructor}
      </p>

      <p>
        <strong>Description:</strong>
        {course.description}
      </p>

      <p>
        <strong>Difficulty:</strong>
        {course.difficulty}
      </p>

      <p>
        <strong>Students:</strong>
        {course.students}
      </p>

      <p>
        <strong>Duration:</strong>
        {course.duration}
      </p>

      <p>
        <strong>Lessons:</strong>
        {course.lessons}
      </p>

      <button onClick={() => navigate(-1)}>
        Back
      </button>

    </div>
  );
}

export default CourseDetails;