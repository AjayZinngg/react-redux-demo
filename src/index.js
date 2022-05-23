import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import UserPage from "./components/UserPage";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(reducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <UserPage />
    </Provider>
  </StrictMode>
);
