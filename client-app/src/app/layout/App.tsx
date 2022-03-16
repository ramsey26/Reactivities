import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Navbar";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import HomePage from "../../feature/home/HomePage";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";

function App() {
  const { key } = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path='/activities' component={ActivityDashboard} />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route
                key={key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
