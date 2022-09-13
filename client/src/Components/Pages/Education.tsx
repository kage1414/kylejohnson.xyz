import { FC, ReactElement } from 'react';
import FullPost from '../FullPost';

type Education = {
  school: string;
  time: string;
  certificate?: string;
  degree?: string;
};

export type EducationData = Array<Education>;

type Props = {
  educationData: EducationData;
  display: boolean;
};

export const Education: FC<Props> = ({
  educationData,
  display,
}): ReactElement => (
  <>
    {display && (
      <div
        style={{
          marginLeft: '15px',
          display: 'flex',
          alignContent: 'flex-start',
          flexFlow: 'row wrap',
        }}
      >
        {educationData.map(
          ({ school, time, certificate, degree }, idx: number) => (
            <FullPost
              title={school}
              subtitle={certificate || degree}
              time={time}
              key={school + idx}
            />
          )
        )}
      </div>
    )}
  </>
);
