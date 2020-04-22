import React from "react";
import {Link, useHistory} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";

const Header = () => {
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <span className="navbar-brand">Best Recipes Ever</span>
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div className="nav-link">
                <Link to="/recipes">
                  <span className="navbar-text">Recipes</span>
                </Link>
              </div>
              {localStorage.getItem("user_id") && (
                <div className="nav-link">
                  <Link to="/profile">
                    <span className="navbar-text">Profile</span>
                  </Link>
                </div>
              )}
            </Nav>
            {localStorage.getItem("user_id") ? (
              <Button variant="outline-warning" onClick={() => handleLogOut()}>
                Logout
              </Button>
            ) : (
              <Link to="/sign-in">
                <button className="btn btn-success">Sign In</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
