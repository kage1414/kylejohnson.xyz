import { ReactElement } from 'react';
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

export function Education({ educationData, display }: Props): ReactElement {
  return (
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
}
