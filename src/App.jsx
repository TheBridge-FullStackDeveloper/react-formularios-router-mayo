import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormOne from "./components/FormOne/FormOne";
import { UserForm } from "./components/UserForm/UserForm";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormOne" element={<FormOne />} />
          <Route path="/UserForm" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
