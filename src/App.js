import { OrderContextProvider } from "./context/OrderContextProvider"

import { AppRouter } from "./routes/AppRouter"

import { Loader } from "./components/home/loader/Loader"


function App() {
  return (
    <OrderContextProvider>
      <AppRouter />
    </OrderContextProvider>
  );
}

export default App;

//
//<Loader />