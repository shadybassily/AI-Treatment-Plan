import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithoutSidebar from "./components/outlet/WithoutSidebar";
import WithSidebar from "./components/outlet/WithSidebar";
import GeneratePlan from "./components/generate-plan/GeneratePlan";
import SignInForm from "./components/signIn-signUp/SignInForm";
import "./App.css";
import SignUpForm from "./components/signIn-signUp/SignUpForm";

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
            <Route path="/" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
