import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <Link to="/">
                            <h4>Best Recipes Ever</h4>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
