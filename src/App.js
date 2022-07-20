import { useState } from "react";
import Data from "./Data";

export default function App() {
  const [data, setData] = useState("users");
  return (
    <div>
      <button onClick={() => setData("posts")}>Posts</button>
      <button onClick={() => setData("users")}>Users</button>
      <Data data={data} />
    </div>
  );
}
