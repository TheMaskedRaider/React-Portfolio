import React from "react";
import CardBtn from "../CardBtn";
import Col from "../Col"
import "./style.css";

function Project(props) {
    return (
        <Col size="md-3 sm-12">
            <div className="card" >
                <h2>{props.pName}</h2>
                <p>{props.pBody}</p>
                <CardBtn
                    onClick={() => window.open(props.linkDeployed)}
                    linkType="deployBTN"
                    name='deployed'
                />
                <CardBtn
                    onClick={() => window.open(props.linkGithub)}
                    linkType="githubBTN"
                    name='github'
                />
            </div>
        </Col>
    );
}

export default Project;
