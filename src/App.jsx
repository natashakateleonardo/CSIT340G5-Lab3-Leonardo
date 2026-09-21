const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Content = (props) => (
  <div>
    <Part name={props.part1} exercises={props.exercises1} />
    <Part name={props.part2} exercises={props.exercises2} />
    <Part name={props.part3} exercises={props.exercises3} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)

const Footer = (props) => (
  <footer>
    {props.name} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = 'BSIT 4th Year - 1st Semester'
  const part1 = 'CSIT340 - Industry Elective 1'
  const exercises1 = 3
  const part2 = 'FL033 - Nihonggo 1'
  const exercises2 = 3
  const part3 = 'ENGL014 - Technical Writing'
  const exercises3 = 3

  const studentName = 'Natasha Kate A. Leonardo'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App