const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} />
    <Part part={props.part2} />
    <Part part={props.part3} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
)

const Footer = (props) => (
  <footer>
    {props.name} - {props.courseCode} - {props.section}
  </footer>
)

const App = () => {
  const course = 'BSIT 4th Year - 1st Semester'
  
  const part1 = { name: 'CSIT340 - Industry Elective 1', exercises: 3 }
  const part2 = { name: 'FL033 - Nihonggo 1', exercises: 3 }
  const part3 = { name: 'ENGL014 - Technical Writing', exercises: 3 }

  const studentName = 'Natasha Kate A. Leonardo'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App