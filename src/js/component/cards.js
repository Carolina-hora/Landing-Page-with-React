import React from "react";

export const Cards = (props) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 gx-3 gy-3">
        <div className="card">
            <img src={props.imageUrl} className="card-img-top rounded-0" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
                <div class="card-footer bg-light text-center">
                <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        
        </div>
    );
}

