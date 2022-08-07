import { useEffect } from "react";
import { useFetch } from "./useFetch";
import { useLocalStorage } from "./useLocalStorage";

export function Product() {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
    }

    fetchData();
  }, [request]);

  function handleCLick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <span>{error}</span>;
  if (loading) return <span>Carregando...</span>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleCLick}>notebook</button>
        <button onClick={handleCLick}>smartphone</button>

        {data.map((item) => {
          return <li key={item.id}>{item.nome}</li>;
        })}
      </div>
    );
  else return null;
}
