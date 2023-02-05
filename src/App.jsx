import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithoutSidebar from "./components/outlet/WithoutSidebar";
import WithSidebar from "./components/outlet/WithSidebar";

import GeneratePlan from "./components/generate-plan/GeneratePlan";
import PlanDetails from "./components/plan-details/PlanDetails"

import SignInForm from "./components/signIn-signUp/SignInForm";
import SignUpForm from "./components/signIn-signUp/SignUpForm";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            {/* WithSidebar component, to display side bar to certain routes */}
            <Route element={<WithSidebar />}>
              <Route path="/generate-plan" element={<GeneratePlan />} />
              <Route path="/plan-details/:id" element={<PlanDetails />} />
            </Route>

            {/* WithoutSidebar component, no sidebar needed on login or regestration */}
            <Route element={<WithoutSidebar />}>
              <Route path="/" element={<SignInForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
