import { useState } from "react";
import "./App.css";
import { InputSection } from "./components/InputSection";
import { Preview } from "./components/Preview";

export default function App() {
  const [personal, setPersonal] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  function handlePersonChange(value, name) {
    setPersonal((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <section className="input-section">
        <div>
          <InputSection value={personal} changedValue={handlePersonChange} />
        </div>
      </section>
      <section className="preview-section">
        <div>
          <Preview personal={personal} />
        </div>
      </section>
    </>
  );
}
