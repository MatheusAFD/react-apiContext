import { useState } from "react";

export function Radio() {
  const [produto, setProduto] = useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      {produto}
      <label htmlFor="smartphone">
        <input
          type="radio"
          name="produto"
          value="smartphone"
          id="smartphone"
          onChange={handleChange}
        />
        Smartphone
      </label>

      <label htmlFor="notebook">
        <input
          type="radio"
          name="produto"
          value="notebook"
          id="notebook"
          onChange={handleChange}
        />
        Notebook
      </label>
    </form>
  );
}
