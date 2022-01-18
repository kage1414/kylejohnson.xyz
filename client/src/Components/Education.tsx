import React, { FC, ReactElement } from 'react';

interface IProps {
  school: string;
  time: string;
  degree?: string;
  certificate?: string;
}

interface IData {
  Data: any;
  selectedTab: any;
}

const Education: FC<IData> = ({ Data, selectedTab }) => (
  <div style={{
    marginLeft: '15px',
    display: 'flex',
    alignContent: 'flex-start',
    flexFlow: 'row wrap'
  }}>
    {Data[selectedTab.name].map((data: { school: string; time: string; degree?: string; certificate?: string; }, idx: number) => (
      <EducationElement school={data.school}
        degree={data.degree}
        time={data.time}
        certificate={data.certificate}
        key={data.school + idx} />
    ))}
  </div>
);

const EducationElement: FC<IProps> = ({ school, time, degree, certificate }): ReactElement => {

  return (
    <div style={{
      margin: '10px 0',
      flex: '1'
    }}>
      <div style={{ margin: '6px' }}>
        <h2 style={{
          height: '16px',
          margin: '6px 0',
          padding: '3px',
          border: 'rgb(199, 199, 199) 1px solid',
          backgroundColor: 'rgb(240, 243, 252'
        }}>
          {school}
          <span style={{
            margin: '0 10px',
            fontWeight: 'normal'
          }}>{degree || certificate}</span></h2>
        <h3 style={{ margin: '10px 0' }}>{time}</h3>
      </div>
    </div>
  );
};

export default Education;
