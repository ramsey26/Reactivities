import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router-dom";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import HomePage from "../../feature/home/HomePage";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
import TestErrors from "../../feature/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../feature/errors/NotFound";
import ServerError from "../../feature/errors/ServerError";

function App() {
  const { key } = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path='/activities' component={ActivityDashboard} />
                <Route path='/activities/:id' component={ActivityDetails} />
                <Route
                  key={key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route path='/errors' component={TestErrors} />
                <Route path='/server-error' component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
