import React from 'react';
import { RouterProvider } from 'react-router-dom';
import UsersProvider from "./context/users";
import router from "./routers";

const App = () => {
  return (
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>
  );
}

export default App;