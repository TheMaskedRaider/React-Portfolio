import React from "react";
import Col from "../components/Col"
import Container from "../components/Container"
import Row from "../components/Row"
import Project from "../components/ProjectCard"

const Projects = () => {
  return (
    <Container fluid>
      <Row>
      <Project
                pName="EZFitTracker"
                pBody='A group project application that was made in order to assist users in losing or gaining weight to hit a specific goal.
                It has the features to set and calculate weight aawy from your target as well as BMI. Additonally suggests workouts based on the weather and allows to search for calories of a given food.'
                linkDeployed="https://p3t3rn9uy3n.github.io/EZFitTracker/"
                linkGithub="https://github.com/p3t3rn9uy3n/EZFitTracker"
              />
                    <Project
                pName="Weather-Forecaster"
                pBody="This particular application's goal is to give the user a current weather timestamp for a selected city. Once selected, the city will be displayed alongside it's temperature. Additionally, a 5 day forecast will be presented to the user."
                linkDeployed="https://themaskedraider.github.io/Weather-Forecaster/"
                linkGithub="https://github.com/TheMaskedRaider/Weather-Forecaster"
              />
                    <Project
                pName="Fitness Tracker"
                pBody='A fitness tracker application made using and interfaced with MongoDB and mongoAtlas.
                Using this application a user may input and store various workouts and what each one entailed.'
                linkDeployed="https://protected-inlet-53817.herokuapp.com/"
                linkGithub="https://github.com/TheMaskedRaider/Fitness-Tracker"
              />
                    <Project
                pName="Book Club"
                pBody='A group project application that was made in order to present users with an ability to shar book reviews and suggestions to
                other app users. Signing up allows the users to search for and add books to the applications database ass well as leave personalized reviews on thier or any other users books that have been added.'
                linkDeployed="https://quiet-earth-09250.herokuapp.com"
                linkGithub="https://github.com/amandardz/Book-Club"
              />
                    <Project
                pName="Javascript Timed quiz"
                pBody='A simple timed quiz that will generate a set of questions for the user upon starting the quiz. Once the quiz is complete it will prompt the user tosave there score with a name and then save the most recent score and name.'
                linkDeployed="https://themaskedraider.github.io/JavaScript-Timed-Quiz/"
                linkGithub="https://github.com/TheMaskedRaider/JavaScript-Timed-Quiz"
              />
                    <Project
                pName="Ecommerce Backend"
                pBody='A MySQL application. The funnctionality of this app is to allow a user to be able to manage their backend DB from the command line and browser.
                the strength of this is that, with correct formatting, manage their website without ever having to actually open mysql workbench. This keeps the DB relatively secure.'
                linkDeployed="https://www.youtube.com/watch?v=H1VChWNcGUM"
                linkGithub="https://github.com/TheMaskedRaider/orm-ecommerce-backend"
              />
      </Row>
    </Container>
  );
};

export default Projects;
