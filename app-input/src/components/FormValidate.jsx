import React from "react";
import { InputGeral } from "./InputGeral";
import useForm from "../Hooks/useForm";

export function FormValidate() {
  const cep = useForm("cep");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGeral
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
    </form>
  );
}
