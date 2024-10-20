import { useState, useEffect } from "react";
import "./Jokes.css";
import emoji from './emogy.png';


export default function Jokes() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    
    <div className="jokes">
      <h1>Jokes!</h1>
      {joke && (
        <>
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2>
        </>
      )}
      <button onClick={getNewJoke}>New Joke</button>
    </div>
    
  );
}
