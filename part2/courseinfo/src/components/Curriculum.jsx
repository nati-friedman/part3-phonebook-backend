import Course from "./Course";

const Curriculum = ({ courses }) => {
  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default Curriculum;
