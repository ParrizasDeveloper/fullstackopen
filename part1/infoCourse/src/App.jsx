function Header({course}) {
  return (
    <h1>{course}</h1>
  )
}

function Content({parts}) {
  return (
    <>
      {
        parts.map((part) => (
          <Part key={part.title} title={part.title} exercises={part.exercises} />
        ))
      }
    </>
  )
}

function Part({title, exercises}) {
  return (
    <p>
      {title} - Exercises: {exercises}
    </p>
  )
}

function Total({parts}) {
  const total = parts.reduce((sum, part) => sum += part.exercises, 0)
  return (
    <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App