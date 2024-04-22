import * as React from "react";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/style.scss";
import { store } from "./store";
import { Main } from "@pages/Main/Main";
import { Spinner } from "@components/Spinner/Spinner";

const PhotoGrid = lazy(() =>
  import("@widgets/PhotoGrid/PhotoGrid").then((module) => ({
    default: module.PhotoGrid,
  }))
);
const Single = lazy(() =>
  import("@widgets/Single/Single").then((module) => ({
    default: module.Single,
  }))
);

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<PhotoGrid />} />
              <Route path="/view/:postCode" element={<Single />} />
            </Routes>
          </Suspense>
        </Main>
      </Router>
    </Provider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
