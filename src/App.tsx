import { LoginPage } from "./pages/LoginPage/LoginPage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
 import { MainPage } from "./pages/MainPage/MainPage";
 import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";


const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  // {
  //   path: "/registration",
  //   element: <RegistrationPage/>,
  // },
     {
      path: "/main",
      element: <MainPage/>
    },
    {
      path: "/profile",
      element: <ProfilePage/>
    },
    {
      path: "/details/:id",
      element: <DetailsPage/>
    },
   
 ]);

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={routerConfig}/>
        </div>
      </div>
    </>
  );
}


export default App
