import { useEffect, useState } from "react";
import "./app.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Menu from "./components/menu";
import Page from "./components/page";
import List from "./components/list";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    console.log("App");
  }, []);

  return (
    <div className="app">
      <Header count={count} changeCount={handleIncrementCount} />
      <Menu
        subtitle="oi subtitle"
        dado={{
          numeroQualquer: 10,
        }}
        items={[
          {
            label: "Home",
            link: "/home",
          },
          {
            label: "Produtos",
            link: "/produtos",
          },
        ]}
        date={new Date()}
      />
      <Page title="oi" count={count} changeCount={handleIncrementCount}>
        <List />
      </Page>
      <Footer />
    </div>
  );
}

export default App;
