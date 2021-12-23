import React from "react";

export let Navbar = () => {
	return (
		<div className="container-fluid bg-dark">
			<div className="col-4">
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse d-flex"
						id="navbarCollapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
						</ul>
						<form className="form-inline mt-2 mt-md-0">
							<button
								className="btn btn-outline-success ms-10"
								type="submit">
								Search
							</button>
						</form>
					</div>
				</nav>
			</div>
		</div>
	);
};
