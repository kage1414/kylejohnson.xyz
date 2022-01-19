import React, { FC, ReactElement } from 'react';

interface IProps {
  employer: string;
  time: string;
  description: Array<string>;
  position: string;
  logo?: string;
}

interface IData {
  experienceData: Array<any>;
}

const Experience: FC<IData> = ({ experienceData }): ReactElement => {

  return (
    < div style={{
      marginLeft: '15px',
      display: 'flex',
      alignContent: 'flex-start',
      flexFlow: 'row wrap'
    }}>
      {
        experienceData.map((data: { employer: string; description: Array<string>; position: string; time: string; logo: string; }, idx: number) => (
          <ExperienceElement description={data.description}
            employer={data.employer}
            time={data.time}
            position={data.position}
            key={data.employer + idx}
            logo={data.logo} />  
        ))
      }
    </div >
  );
};

const ExperienceElement: FC<IProps> = ({ employer, time, description, position }): ReactElement => {

  return (
    <div style={{
      margin: '10px 0',
      flex: '1'
    }}>
      <div style={{ margin: '6px' }}>
        <h2 style={{
          margin: '6px 0',
          padding: '3px',
          border: 'rgb(199, 199, 199) 1px solid',
          backgroundColor: 'rgb(240, 243, 252'
        }}>
          {employer}
          <span style={{
            margin: '0 10px',
            fontWeight: 'normal'
          }}>{time}</span></h2>
        <h3 style={{ margin: '10px 0' }}>{position}</h3>
        <ul style={{ margin: '6px' }}>{description.map((text: string, idx: number) => (<li key={text + idx}
          style={{
            margin: '5px 0',
            width: '300px',
            lineHeight: '18px',
            color: idx % 2 === 0 ? 'black' : '#686868'
          }}>{`${text}`}</li>))}</ul>
      </div>
    </div>
  );
};

export default Experience;
