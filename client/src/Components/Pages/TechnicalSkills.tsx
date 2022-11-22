import { ReactElement } from 'react';
import { Post } from '../Post';
import { Box, Grid } from '@mui/material';

type TechStack = {
  stack: string;
  technologies: Array<string>;
};

export type TechnicalSkillsData = Array<TechStack>;

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
            <Grid item>
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

function TechnicalSkillsElement({
  stack,
  technologies,
}: TechStack): ReactElement {
  return (
    <Box
      style={{
        margin: '10px 0',
        flex: '1',
      }}
    >
      <Box>
        <h2
          style={{
            height: '16px',
            padding: '3px',
            border: 'rgb(199, 199, 199) 1px solid',
            margin: '6px',
            backgroundColor: 'rgb(240, 243, 252',
          }}
        >
          {stack}
        </h2>
        <Box>
          {technologies.map((title, idx) => {
            return <Post key={title + idx} title={title} idx={idx} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
