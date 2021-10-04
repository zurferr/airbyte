import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";

import { IS_CLOUD } from "core/env";

// We do not follow default config approach that we follow as we want to init
// sentry asap
Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DNS });

const CloudApp = lazy(() => import(`packages/cloud/App`));
const App = lazy(() => import(`./App`));

ReactDOM.render(
  <Suspense fallback={null}>{IS_CLOUD ? <CloudApp /> : <App />}</Suspense>,
  document.getElementById("root")
);
