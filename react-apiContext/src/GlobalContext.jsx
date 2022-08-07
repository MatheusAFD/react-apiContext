import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      const data = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      const json = await data.json();
      setDados(json);
    }

    fetchAPI();
  }, []);

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  );
}
