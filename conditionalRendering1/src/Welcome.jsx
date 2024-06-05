function Welcome({name, age}) {
  return (
    <div>
    <h2>Welcome, {name}!</h2>
    {<p>Your age is {age}.</p>}
    {age > 18 && <p>Your age is {age}.</p>}
    {age !== undefined && <p>Your age is {age}.</p>}
    {age > 18 && age <65 && <p>Your age is {age}.</p>}
    {age > 18 && age <65 && name === "John" && <p>Your age is {age}.</p>}
    </div>
  )
}

export default Welcome