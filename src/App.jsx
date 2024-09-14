import "./App.css";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState("");
  const [final, setFinal] = useState([]);

  const change = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const end = (e) => {
    e.preventDefault();
    if (content.trim()) {
      setFinal([...final, content]); // Add new content to the array
      setContent(""); // Clear input field
    }
  };

  const de = (index) => {
    const hi = final.filter((ele, i) => i !== index);
    setFinal(hi);
  };

  return (
    <div className="App">
      <div className="first">
        <form onSubmit={end}>
          <input
            type="text"
            value={content}
            onChange={change}
            placeholder="Enter text here"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="win">
        {final.map((ele, index) => (
          <div className="list">
            <h1 key={index}>{ele}</h1>
            <button
              onClick={() => {
                de(index);
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
