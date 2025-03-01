import { HomePage } from "../pages/home";
import { StoreProvider } from "./providers/StoreProvider";

const App = () => {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
};

export default App;
