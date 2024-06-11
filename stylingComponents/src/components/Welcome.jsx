import Age from "./Age"

function Welcome({name}) {
  return (
    <div>
    <h2>Welcome, {name}!</h2>
    <Age age={29}/>
    </div>
  )
}

export default Welcome