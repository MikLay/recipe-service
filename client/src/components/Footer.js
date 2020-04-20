import React, {Component} from 'react';
import styled from "styled-components";


const FooterContainer = styled.footer`
padding: 10px;
margin-top: auto;
margin-bottom: 0;
    /* Set the fixed height of the footer here */
    background-color: #222222;
`;

class Footer extends Component {
    render() {
        return (
            <FooterContainer className="text-muted navbar-fixed-bottom ">
                <div className="navbar-inner">
                    <div className="container">
                        <p className="float-right">
                            <a href="/">Back to top</a>
                        </p>
                        <p>Best recipe website ever, want more? Pay money!</p>
                        <p>My inst <a href="https://www.instagram.com/_miklay/">MikLay</a> or find some info online <a
                            href="https://www.youtube.com/watch?v=Gz2GVlQkn4Q">here</a>.</p>
                    </div>
                </div>
            </FooterContainer>
        );
    }
}

export default Footer;