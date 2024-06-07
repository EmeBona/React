function Color({ color }) {
  return (
    <div>
        <h2>One color</h2>
        <ul>
          {color.map((color) => (
            <li key={color.id}>{color.name}</li>
          ))}
        </ul>
    </div>
  );
}

export default Color;
