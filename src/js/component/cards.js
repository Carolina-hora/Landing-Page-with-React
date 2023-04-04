import React from "react";

export const Cards = (props) => {
    return (
        <div className="col-sm-9 col-md-9 col-lg-9 mx-auto m-4 d-lg-flex">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    
                    <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    );
}

