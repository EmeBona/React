import "./App.css";
import Color from "./components/color/Color.jsx";
import Colors from "./components/colors/Colors.jsx";

function App() {
  return (
    <>
      <Color
        color={[
          { id: 1, name: "purple" }
        ]}
      />
      <Colors colors={[
          { id: 1, name: "purple" },
          { id: 2, name: "pink" },
          { id: 3, name: "blue" },
          { id: 4, name: "green" },
        ]}/>
    </>
  );
}

export default App;
