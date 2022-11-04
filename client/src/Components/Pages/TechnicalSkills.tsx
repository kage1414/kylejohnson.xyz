import { FC, ReactElement } from 'react';
import { Post } from '../Post';
import { Box } from '@mui/material';

type TechStack = {
  stack: string;
  technologies: Array<string>;
};

export type TechnicalSkillsData = Array<TechStack>;

type Props = {
  technicalSkillsData: TechnicalSkillsData;
  display: boolean;
};

export const TechnicalSkills: FC<Props> = ({
  technicalSkillsData,
  display,
}) => (
  <>
    {display && (
      <Box>
        {technicalSkillsData.map(({ stack, technologies }, idx) => (
          <TechnicalSkillsElement
            stack={stack}
            technologies={technologies}
            key={stack + idx}
          />
        ))}
      </Box>
    )}
  </>
);

const TechnicalSkillsElement: FC<TechStack> = ({
  stack,
  technologies,
}): ReactElement => {
  return (
    <div
      style={{
        margin: '10px 0',
        flex: '1',
      }}
    >
      <div>
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
        <div>
          {technologies.map((title, idx) => {
            return <Post key={title + idx} title={title} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
