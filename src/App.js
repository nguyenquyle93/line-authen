import logo from "./logo.svg";
import "./App.css";
import LineLiff from "./LineLiff";
import { LiffProvider } from "react-liff";
import ReactLineLiff from "./ReactLineLiff";

const liffId= "1657897488-4Db7ylqN"

function App() {
  return (
    <div className="App">
      <LiffProvider liffId={liffId}>
        <ReactLineLiff />
        {/* <LineLiff /> */}
      </LiffProvider>
    </div>
  );
}

export default App;
