import React from "react";

export const Jumbotron = () => {
    return (
        <div className="container mx-auto bg-light m-4 p-3 pb-5 ps-3 pe-3">
            <h1 className="display-2">A Warm Welcome!</h1>
            <p className="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
};