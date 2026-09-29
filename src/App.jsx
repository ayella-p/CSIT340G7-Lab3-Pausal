import "./App.css";

const App = () => {
  const course = "BS Information Technology";
  const part1 = {
    name: "Fundamentals of Programming",
    exercises: 3,
  };
  const part2 = {
    name: "Object-Oriented Programming 2",
    exercises: 3,
  };
  const part3 = {
    name: "Data Structures and Algorithms",
    exercises: 3,
  };

  const studentName = "Ayella A. Pausal";
  const courseCode = "CSIT340";
  const section = "G7";

  return (
    <div className="app-container">
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total sum={part1.exercises + part2.exercises + part3.exercises} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  );
};

const Header = (props) => {
  return <h1 className="header-title">{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

const Total = (props) => {
  return <p className="total-units">Total units: {props.sum}</p>;
};

const Footer = (props) => {
  return (
    <p className="footer-text">
      {props.name} — {props.code} — {props.section}
    </p>
  );
};

const Part = (props) => {
  return (
    <p className="part-item">
      <span className="part-name">{props.part.name}</span>
      <span className="part-exercises">{props.part.exercises}</span>
    </p>
  );
};

export default App;
