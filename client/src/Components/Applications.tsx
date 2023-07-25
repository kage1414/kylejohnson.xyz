import React, { FC, ReactElement } from "react";
import FullPost from "./FullPost";

type ApplicationDataElement = {
  description: Array<string>;
  name: string;
  technologies: Array<string>;
  url: string;
};

type IProps = {
  applicationData: Array<ApplicationDataElement>;
};

const Applications: FC<IProps> = ({ applicationData }): ReactElement => {
  return (
    <div
      style={{
        marginLeft: "15px",
        display: "flex",
        alignContent: "flex-start",
        flexFlow: "row wrap",
      }}
    >
      {applicationData.map(({ name, technologies, url, description }, idx) => {
        return (
          <div key={name + idx}>
            <FullPost
              body={description}
              technologies={technologies}
              title={name}
              url={url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Applications;
