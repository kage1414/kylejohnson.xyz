import React, { FC, ReactElement } from "react";
import FullPost from "./FullPost";

interface IProps {
  educationData: Array<any>;
}

const Education: FC<IProps> = ({ educationData }): ReactElement => (
  <div
    style={{
      marginLeft: "15px",
      display: "flex",
      alignContent: "flex-start",
      flexDirection: "column",
    }}
  >
    {educationData.map(({ school, time, certificate, degree }, idx: number) => (
      <FullPost
        title={school}
        subtitle={certificate || degree}
        time={time}
        key={school + idx}
      />
    ))}
  </div>
);

export default Education;
