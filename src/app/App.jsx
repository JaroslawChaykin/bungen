import { HomePage } from "../pages/home";
import { StoreProvider } from "./providers/storeProvider";

const App = () => {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
};

export default App;
