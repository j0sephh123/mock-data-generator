import { useState } from "react";
import "./App.css";
import { useSuspenseQuery } from "@tanstack/react-query";

function App() {
  const [count, setCount] = useState(0);

  const a = useSuspenseQuery({
    queryKey: ["a"],
    queryFn: () => fetch("/api").then((r) => r.json()),
  });
  console.log(a.data);
  


  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
