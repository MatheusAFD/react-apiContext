import { GlobalStorage } from "./GlobalContext";
import { Produto } from "./Produto";

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Produto />
        <Produto />
      </GlobalStorage>
    </div>
  );
}

export default App;
