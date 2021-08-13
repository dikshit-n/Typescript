import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button>Submit</button>
      </div>
      <pre>{code}</pre>
    </form>
  );
}

export default App;
