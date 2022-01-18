import { FC, ReactElement } from 'react';

interface IProps {
  school: string;
  time: string;
  degree?: string;
  certificate?: string;
}

const Education: FC<IProps> = ({school, time, degree, certificate}): ReactElement => {

  return (
      <div style={{margin: '10px 0', flex: '1'}}>
        <div style={{margin: '6px'}}>
          <div style={{ margin: '6px 0', padding: '3px', border: 'rgb(199, 199, 199) 1px solid', backgroundColor: 'rgb(240, 243, 252'}}>
          <h2 style={{ fontSize: '18px' }}>{school}</h2>
          <h3 style={{ fontSize: '14px', margin: '10px 0'}}>{degree || certificate}</h3>
          <h4 style={{ fontSize: '12px', margin: '10px 0', fontWeight: 'normal'}}>{time}</h4>
          </div>
        </div>
      </div>
  )
}

export default Education;