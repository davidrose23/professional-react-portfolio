import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-5 bg-white">
            <div className="container mt-2">
                <h1>Portfolio</h1>
                <p>Here are some of my recent projects:</p>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Note-Taker</h5>
                                <img src="images/note.png" className="card-img-top" alt='img'></img>
                                <p className="card-text">This Project is a note-taking application that uses express.js and ejs.
                                    it allows the user to save notes by storing them in a json file. User can also delete note.</p>
                                <a href="https://davids-note-taker.herokuapp.com" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Weather Dashboard</h5>
                                <img src="images/weather.png" className="card-img-top" alt='img'></img>
                                <p className="card-text">This application allows the user to view 5 day weather data for a city
                                    they search for.  Also has a history section storing up to 5 recent cities.</p>
                                <a href="https://davidrose23.github.io/weather-info-app/" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Coding Quiz Challenge</h5>
                                <img src="images/quiz.png" className="card-img-top" alt='img'></img>
                                <p className="card-text">This web app is a timed coding quiz allowing the user to store
                                    high scores using local storage.</p>
                                <a href="https://davidrose23.github.io/coding-quiz-challenge/" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Work Day Planner</h5>
                                <img src="images/planner.png" className="card-img-top" alt='img'></img>
                                <p className="card-text">This application is a scheduler for the standard work day.
                                    Lets you save meetings or whatever might be on your schedule.</p>
                                <a href="https://davidrose23.github.io/work-day-planner/" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Team Generator</h5>
                                <img src="images/team.png" className="card-img-top" alt='img'></img>
                                <p className="card-text">This app uses inquirer to generate an html page for your
                                    development team
                                </p>
                                <a href="https://github.com/davidrose23/team-generator" class="btn btn-primary">View
                                    Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

