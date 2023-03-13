import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      {posts.map((e) => (
        <Card key={e.id} title={e.title} body={e.body} />
      ))}
    </div>
  );
}

export default App;
