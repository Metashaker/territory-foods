import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import MealsPage from "./pages/Meals";
import "./App.css";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MealsPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
