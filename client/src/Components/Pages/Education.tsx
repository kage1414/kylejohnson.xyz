import { FC, ReactElement } from 'react';
import { FullPost } from '../FullPost';
import { Box } from '@mui/material';

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
      <Box>
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
      </Box>
    )}
  </>
);
