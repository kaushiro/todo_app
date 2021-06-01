import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import NewTodoProvider from "./context/TodoContext";
import LandingPage from "./pages/LandingPage";
import TodoList from "./pages/TodoList";

const App: React.FC = () => {
  let routes = (
    <Switch>
      <Route path="/todos" component={TodoList} />
      <Route path="/" component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <NewTodoProvider>
        <Layout>
          <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        </Layout>
      </NewTodoProvider>
    </div>
  );
};
export default withRouter(App);
