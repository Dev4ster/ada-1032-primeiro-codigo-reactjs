import { useOutletContext } from "react-router-dom";

export function HomePage() {
  const { user } = useOutletContext();

  console.log("user Outlet context", user);

  return (
    <div>
      <h1>Home Page</h1>
      {user.uid}
    </div>
  );
}

export default HomePage;
