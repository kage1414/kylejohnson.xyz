import React, { FC, ReactElement } from 'react';

interface IProps {
  data: {type: string; technologies: Array<string>};
}

const TechnicalSkills: FC<IProps> = ({data}): ReactElement => {
  console.log(data)

  return (
    <div>
      <h2>{data.type}</h2>
      
    </div>
  )
}

export default TechnicalSkills;