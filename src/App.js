import React, { useEffect, useState } from "react";
import "styles/main.scss";
import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Homepage/Dahboard";

function App() {
  const [pin, setPin] = useState(null);
  const [showDash, setShowDash] = useState(false);
  useEffect(() => {
    setPin(JSON.parse(localStorage.getItem("pin")));
    if (pin) {
      setShowDash(true);
    }
  }, [pin]);
  return (
    <div className="App">
      {showDash === true ? (
        <Dashboard setAccountPin={setPin} AccountPin={pin} />
      ) : (
        <Homepage setShowDashboard={setShowDash} setPin={setPin} />
      )}
    </div>
  );
}

export default App;
