import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
//styles
import { Wrapper, Content } from "./Footer.styles";

const Footer=()=>(
    <Wrapper>
        <Content>
            <span>This Website is built with ❤ by Ansh </span>
            <div className="icons">
                <a href="https://www.linkedin.com/in/anshaggarwal01/"><LinkedInIcon/></a>
                <a href="https://github.com/AnshAggarwal4015"><GitHubIcon/></a>
            </div>
        </Content>
    </Wrapper>
);
export default Footer;
