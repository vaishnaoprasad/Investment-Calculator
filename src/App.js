import Header from "./components/header/Header";
import UserInput from "./components/user-input/UserInput";
import { useState } from "react";
import "./App.css";
import Results from "./components/results/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsvalid = userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main id="main">
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsvalid && <p>Please enter a duration greater than 0.</p> }
      {inputIsvalid && <Results  input={userInput} /> }
    </main>
  );
}

export default App;
