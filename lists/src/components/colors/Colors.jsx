function Colors({colors}) {
    return (
        <div>
            <h2>Multiple colors</h2>
            <ul>
              {colors.map((colors) => (
                <li key={colors.id}>{colors.name}</li>
              ))}
            </ul>
        </div>
      );
}

export default Colors