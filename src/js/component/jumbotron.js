import React from "react";

export const Jumbotron = () => {
    return (
        <div className="col-sm-9 col-md-9 col-lg-9 mx-auto bg-light m-4 p-3 pb-5">
            <h1 className="display-2">A Warm Welcome!</h1>
            <p className="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
};