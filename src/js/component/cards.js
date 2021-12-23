import React from "react";

export let Cards = () => {
	return (
		<div className="col-3">
			<div className="card mx-auto" style={{ width: "18rem" }}>
				<img
					className="card-img-top bg-secondary"
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
