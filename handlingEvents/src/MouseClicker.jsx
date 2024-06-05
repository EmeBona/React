function MouseClicker() {
    function handleButtonClick(event){
        console.log(event.currentTarget);
    }

  return (
    <button onClick={handleButtonClick}>
        <img src="https://fastly.picsum.photos/id/987/50/50.jpg?hmac=QaBi6Zr_6zURopphmMqt-GG4CgU0MDb_aDCl8tgA1gU" alt="" />
        Click me!</button>
  )
}

export default MouseClicker