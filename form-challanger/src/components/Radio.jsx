export function Radio({ pergunta, options, value, id, onChange, active }) {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => {
        return (
          <label
            key={option}
            style={{ marginBottom: "1rem", fontFamily: "monospace" }}
          >
            <input
              type="radio"
              id={id}
              onChange={onChange}
              value={option}
              checked={value === option}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
}
