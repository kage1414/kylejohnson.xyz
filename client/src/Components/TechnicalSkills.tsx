import React, { FC, ReactElement } from 'react';
import Post from './Post';

interface IProps {
  type: string;
  technologies: Array<string>;
}

interface IData {
  Data: any;
  selectedTab: any;
}

const TechnicalSkills: FC<IData> = ({ Data, selectedTab }) => (
  <div style={{
    marginLeft: '15px',
    display: 'flex',
    alignContent: 'flex-start',
    flexFlow: 'row wrap'
  }}>
    {Data[selectedTab.name].map((data: { type: string; technologies: Array<string>; }, idx: number) => <TechnicalSkillsElement type={data.type}
      technologies={data.technologies}
      key={data.type + idx} />)}
  </div>
);

const TechnicalSkillsElement: FC<IProps> = ({ type, technologies }): ReactElement => {

  return (
    <div style={{
      margin: '10px 0',
      flex: '1'
    }}>
      <div>
        <h2 style={{
          height: '16px',
          padding: '3px',
          border: 'rgb(199, 199, 199) 1px solid',
          margin: '6px',
          backgroundColor: 'rgb(240, 243, 252'
        }}>{type}</h2>
        <div>
          {technologies.map((title: string, idx) => {
            return <Post key={title + idx}
              title={title}
              idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;