import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export function Produto() {
  const { dados } = useContext(GlobalContext);

  if (dados === null) return null;
  return (
    <div>
      Produto {""}
      {dados.map((item) => {
        return <li>{item.nome}</li>;
      })}
    </div>
  );
}
