import { AppBar, Box, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';

import { Post } from '../Post';

export type TechnicalSkillsData = Array<any>;

type Props = {
  technicalSkillsData: TechnicalSkillsData;
  display: boolean;
};

export function TechnicalSkills({
  technicalSkillsData,
  display,
}: Props): ReactElement {
  return (
    <>
      {display && (
        <Grid container>
          {technicalSkillsData.map(({ stack, technologies }, idx) => (
            <Grid
              item
              key={`${JSON.stringify(stack)} ${JSON.stringify(
                technologies
              )} ${idx}`}
            >
              <TechnicalSkillsElement
                stack={stack}
                technologies={technologies}
                key={stack + idx}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

function TechnicalSkillsElement({ stack, technologies }: any): ReactElement {
  return (
    <Box>
      <Box>
        <Box
          style={{
            backgroundColor: 'rgb(240, 243, 252',
          }}
          margin={1}
          padding='0 1em'
          border='rgb(199, 199, 199) 1px solid'
        >
          <Typography variant='h6' margin={0}>
            {stack}
          </Typography>
        </Box>
        <Box>
          {technologies.map((title: any, idx: number) => {
            return <Post key={title + idx} title={title.name} idx={idx} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
