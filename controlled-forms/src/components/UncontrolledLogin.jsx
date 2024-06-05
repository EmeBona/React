

function UncontrolledLogin() {
    function handleSubmit(event){
        event.preventDeFault();
        const formData = new FormData(event.target);

        const data = {
            username:formData.get("username"),
            password:formData.get("password"),
            // remember:formData.get("remember"),
        }

        console.log(event);
        console.log(event.target);
        console.log(data);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username4" />
        <label htmlFor="username">Password:</label>
        <input type="password" id="password" name="password"/>
        {/* <label htmlFor="remember">Remember:</label>
        <input type="checkbox" id="remember" /> */}
        

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
  )
}

export default UncontrolledLogin