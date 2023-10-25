import { useEffect, useState } from "react";

function List() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (loading) {
      console.log("esta carregando");
    }
  }, [loading]);

  if (loading) {
    return <small>loading..</small>;
  }

  if (!list.length) {
    return <small>lista vazia</small>;
  }

  return list.map((item) => (
    <article key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </article>
  ));
}

export default List;
