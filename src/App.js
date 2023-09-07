import { createBrowserRouter,RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />

        }
      ]
    }
  ])

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
