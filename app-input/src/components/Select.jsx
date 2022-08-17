import { useState } from "react";

export function Select() {
  const [select, setSelect] = useState("");
  return (
    <form>
      <select
        value={select}
        id="produtos"
        onChange={({ target }) => {
          setSelect(target.value);
        }}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        <option value="notebook">notebook</option>
        <option value="computador">computador</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </form>
  );
}
