function Welcome({name, age}) {
  return (
    <div>
    <h2>Welcome, {name}!</h2>
    {age > 18 && <p>Your age is {age}.</p>}
    {age < 18 && <p>You are very young</p>}
    </div>
  )
}

export default Welcome