import { Provider } from "react-redux";
import { mainStore } from "app/store/mainStore";

export const StoreProvider = ({ children }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};
