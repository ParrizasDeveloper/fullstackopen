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

function Total({exercises}) {
  const total = exercises.reduce((sum, exercise) => (
    sum += exercise
  ))
  return (
    <p>Number of exercises: {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
        parts={[
          {
            title: part1,
            exercises: exercises1
          },
          {
            title: part2,
            exercises: exercises2
          },
          {
            title: part3,
            exercises: exercises3
          }
        ]} 
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App