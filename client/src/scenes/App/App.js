import React, { Component } from "react";
import styled from "styled-components";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import history from "../../history";
import { url } from "../../constants";
import { Footer, Header } from "../../components";
import { Recipes, Recipe, EditRecipe, CreateRecipe } from "../";

const PageContainer = styled.div`

position: relative;
  min-height: 100%;
    display: flex !important;
  flex-direction: column !important;
  background: antiquewhite;
`;

const ContentContainer = styled.main`
  flex: 1 0 auto !important;
  :after{
  
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <PageContainer>
          <Router history={history}>
            <Header />
            <Switch>
              <ContentContainer role="main"
              >
                <Route exact path="/"><Redirect to={url.URL_RECIPES}/></Route>
                <Route
                  path={[url.URL_RECIPES]}
                  exact
                  strict
                  component={Recipes}
                />
                <Route path={[url.URL_RECIPE]} exact component={Recipe} />
                <Route
                  path={[url.URL_EDIT_RECIPE]}
                  exact
                  component={EditRecipe}
                />
                <Route
                  path={[url.URL_ADD_RECIPE]}
                  exact
                  component={CreateRecipe}
                />
              </ContentContainer>
            </Switch>
            <Footer />
          </Router>
        </PageContainer>
      </>
    );
  }
}

export default App;
