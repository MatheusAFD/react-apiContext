import { useState } from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },

  {
    id: "email",
    label: "Email",
    type: "Email",
  },

  {
    id: "senha",
    label: "Senha",
    type: "password",
  },

  {
    id: "cep",
    label: "Cep",
    type: "text",
  },

  {
    id: "rua",
    label: "Numero",
    type: "text",
  },

  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },

  {
    id: "cidade",
    label: "cidade",
    type: "text",
  },

  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

export function Input() {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  const [response, setResponse] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => {
          return (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                name="nome"
                id={id}
                value={form[id]}
                onChange={handleChange}
              />
              <br />
            </div>
          );
        })}
        {response && response.ok && <p>Formulário enviado</p>}
        <button>Enviar</button>
      </form>
    </div>
  );
}
