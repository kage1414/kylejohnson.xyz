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
        display: "flex",
        alignContent: "flex-start",
        flexDirection: "column",
      }}
    >
      {applicationData.map(({ name, technologies, url, description }, idx) => (
        <div key={name + idx}>
          <FullPost
            body={description}
            title={name}
            url={url}
            secondaryBody={technologies}
            secondaryBodyTitle="Technologies used:"
          />
        </div>
      ))}
    </div>
  );
};

export default Applications;
