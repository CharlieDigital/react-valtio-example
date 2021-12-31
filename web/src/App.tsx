import "./App.css";
import CompanyGenerator from "./components/CompanyGenerator";
import Counter from "./components/Counter";
import EmployeeGenerator from "./components/EmployeeGenerator";

function App() {
  return (
    <div>
      <Counter></Counter>
      <EmployeeGenerator></EmployeeGenerator>
      <CompanyGenerator></CompanyGenerator>
    </div>
  );
}

export default App;
