import { ReactElement } from 'react';
import { Post } from '../Post';
import { Box, Grid } from '@mui/material';

export type TechnicalSkillsData = Array<any>;

type Props = {
  technicalSkillsData: TechnicalSkillsData;
  display: boolean;
};

export function TechnicalSkills({
  technicalSkillsData,
  display,
}: Props): ReactElement {
  console.log({ technicalSkillsData });
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
          {technologies.map((title: any, idx: number) => {
            return <Post key={title + idx} title={title.name} idx={idx} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
