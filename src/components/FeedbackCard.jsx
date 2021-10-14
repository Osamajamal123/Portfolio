import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<div className="d-flex align-items-center">
								<div className="border rounded-circle">
								<img src={data.img} alt="" height="100" className={data.id==2?"border rounded-circle":""}/>
									</div>
							
								<h5 className="text-info px-2">{data.name}</h5>
							</div>
							<p className="description mt-3">{data.feedback}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
