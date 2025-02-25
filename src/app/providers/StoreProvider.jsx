import { Provider } from "react-redux";
import { mainStore } from "../store/mainStore";

export const StoreProvider = ({ children }) => {
  return <Provider store={mainStore}>{children}</Provider>;
};
