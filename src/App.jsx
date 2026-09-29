const App = () => {
  const course = 'BS Information Technology'
  const part1 = 'Fundamentals of Programming'
  const exercises1 = 3
  const part2 = 'Object-Oriented Programming 2'
  const exercises2 = 3
  const part3 = 'Data Structures and Algorithms'
  const exercises3 = 3

  const studentName = 'Ayella A. Pausal'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total sum={exercises1 + exercises2 + exercises3} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>

      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.sum}</p>
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.code} - {props.section}
    </p>
  )
}

export default App