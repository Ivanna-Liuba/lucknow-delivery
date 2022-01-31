import { OrderContextProvider } from "./context/OrderContextProvider"

import { AppRouter } from "./routes/AppRouter"



function App() {
  return (
    <OrderContextProvider>
      <AppRouter />
    </OrderContextProvider>
  );
}

export default App;
