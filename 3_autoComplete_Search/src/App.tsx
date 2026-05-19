import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<any[]>([]);
  const [focus, setFocus] = useState<boolean>(false);
  const [cache, setCache] = useState<Record<string, any[]>>({});
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleAutoComplete = async () => {
    try {
      if (cache[input]) {
        console.log("cache returned" + input);
        setResult(cache[input]);
        return;
      }
      console.log("api call");
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input,
      );
      const res = await data.json();
      setResult(res.recipes);
      setCache((prev) => ({ ...prev, [input]: res?.recipes }));
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < result.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        setInput(result[selectedIndex].name);
        setFocus(false);
      }
    }
  };

  useEffect(() => {
    const key = setTimeout(() => {
      handleAutoComplete();
    }, 300);

    return () => clearTimeout(key);
  }, [input]);
  return (
    <>
      <div className="container">
        <div className="input-box">
          <input
            className="input"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setInput(e.target.value);
              setSelectedIndex(-1);
              setFocus(true);
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 200)}
            onKeyDown={handleKeyPress}
            value={input}
          />
        </div>
        {focus && (
          <div className="result-box">
            {result?.map((val, idx) => (
              <div
                key={idx}
                className={`result ${selectedIndex === idx ? "active" : ""}`}
              >
                {val.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
