import "../styles/globals.css";
import { app, db } from "../firebaseConfig";

function MyApp({ Component, pageProps }) {
  console.log(app && "database initialized");
  return <Component {...pageProps} />;
}

export default MyApp;
