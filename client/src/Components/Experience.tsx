import React, { FC, ReactElement } from "react";
import FullPost from "./FullPost";

interface IProps {
  experienceData: Array<any>;
}

const Experience: FC<IProps> = ({ experienceData }): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "flex-start",
        flexDirection: "column",
      }}
    >
      {experienceData.map(
        ({ employer, description, position, time }, idx: number) => (
          <FullPost
            key={employer + position + idx}
            title={position}
            subtitle={employer}
            time={time}
            body={description}
          />
        )
      )}
    </div>
  );
};

export default Experience;
