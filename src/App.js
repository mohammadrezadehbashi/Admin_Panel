import logo from "./logo.svg";
// import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Router from "./Router";
import Theme from "./Prooviders/ThemeProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false,
  //       refetchOnReconnect: false,
  //       refetchIntervalInBackground: false,
  //       retry: false,
  //       staleTime: 24 * 60 * 60 * 1000,
  //     },
  //   },
  // });


  const queryClient = new QueryClient();
  
  return (
    <div
    // className="App"
    >
      {/* <Auth/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <Theme>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Theme>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
