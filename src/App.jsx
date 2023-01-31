import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithoutSidebar from "./components/outlet/WithoutSidebar";
import WithSidebar from "./components/outlet/WithSidebar";
import Login from "./components/login/Login";
import "./App.css";
import GeneratePlan from "./components/generate-plan/GeneratePlan";

function App() {
  return (
   <div className="App">
     <BrowserRouter>
      <Routes>
        {/* WithSidebar component, to display side bar to certain routes */}
        <Route element={<WithSidebar />}>
          <Route path="/generate-plan" element={<GeneratePlan />} />
        </Route>

        {/* WithoutSidebar component, no sidebar needed on login or regestration */}
        <Route element={<WithoutSidebar />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
