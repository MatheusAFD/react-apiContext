import { Slide } from "./Slide";

function App() {
  const slides = [
    {
      id: "slide1",
      text: "slide1",
    },

    {
      id: "slide2",
      text: "slide2",
    },

    {
      id: "slide3",
      text: "slide3",
    },
  ];

  return (
    <div className="App">
      <Slide slides={slides} />
    </div>
  );
}

export default App;
