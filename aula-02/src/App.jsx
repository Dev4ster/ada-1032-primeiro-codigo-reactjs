import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import "./app.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import Menu from "./components/menu";
import Page from "./components/page";
import List from "./components/list";
import Todo from "./components/todo";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isLogged: true, user: action.payload };
    case "LOGOUT":
      return { isLogged: false, user: null };
    default:
      return state;
  }
};

const dispatchLogin = (userName) => ({
  type: "LOGIN",
  payload: {
    name: userName,
  },
});

function App() {
  const [count, setCount] = useState(0);
  const [busca, setBusca] = useState("");

  const [authState, dispatch] = useReducer(loginReducer, {
    isLogged: false,
    user: null,
  });

  const login = () => {
    dispatch(dispatchLogin("dispatchLogin"));
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const inputRef = useRef();

  const handleIncrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // count = state
    console.log("busca", busca);
    console.log("inputRef", inputRef.current?.value);
    console.log("querySelector", document.querySelector("input").value);
  }, [busca]);

  const buscaHasAda = useMemo(() => {
    return busca.includes("ada");
  }, [busca]);

  console.log("DATE", new Date().getTime());

  console.log("DateMemo", buscaHasAda);

  // useEffect(() => {
  //   console.log("App");
  // }, []);

  // useEffect(() => {
  //   if (busca.length > 3) {
  //     console.log("tem mais de 3");
  //   }

  //   return () => {};
  // }, [busca]);

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
        {/* {count < 5 ? <List /> : <></>} */}
        {/* <input
          ref={inputRef}
          type="text"
          value={busca}
          onInput={(e) => setBusca(e.target.value)}
        />
        {authState.isLogged ? <h1>LOGADO</h1> : <h1>Deslogado</h1>}
        {authState.user ? <h1>{authState.user.name}</h1> : <h1>Sem usuário</h1>}
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button> */}
        <Todo />
      </Page>
      <Footer />
    </div>
  );
}

export default App;
