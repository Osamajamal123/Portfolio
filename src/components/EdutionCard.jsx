import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
  return (
    <Fade right duration={1000} distance="40px">
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <div className="d-flex flex-column flex=lg-row ">
                <div>
                  <img
                    src={education.img}
                    alt=""
                    height="130"
                    width="120"
                    className="rounded-circle"
                  />
                </div>

                <div>
                  <h5 className="text-info px-3 pt-3">
                    {education.schoolName}
                  </h5>
                  <div className="px-3">
                    <h6>{education.subHeader}</h6>
                  </div>
                </div>
              </div>

              <Badge color="info" className="mr-1">
                {education.duration}
              </Badge>
              <p className="description mt-3">{education.desc}</p>
              {/* <ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EdutionCard;
