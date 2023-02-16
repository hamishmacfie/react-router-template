import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/Layout";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
