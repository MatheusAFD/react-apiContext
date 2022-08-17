import { useState } from "react";

export function Validacao() {
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);

  function validaCep(value) {
    if (value.lenght === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    console.log(validaCep(target.value));
  }

  return (
    <form>
      <label htmlFor="cep">cep</label>
      <input
        type="text"
        name="nome"
        id="cep"
        placeholder="00000-000"
        onChange={({ target }) => {
          setCep(target.value);
        }}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
    </form>
  );
}
