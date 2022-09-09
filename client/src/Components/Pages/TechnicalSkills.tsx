import React, { FC, ReactElement, useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post';

interface IProps {
  type: string;
  technologies: Array<string>;
}

export const TechnicalSkills: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/technical_skills').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div
      style={{
        marginLeft: '15px',
        display: 'flex',
        alignContent: 'flex-start',
        flexFlow: 'row wrap',
      }}
    >
      {data.map(
        (data: { type: string; technologies: Array<string> }, idx: number) => (
          <TechnicalSkillsElement
            type={data.type}
            technologies={data.technologies}
            key={data.type + idx}
          />
        )
      )}
    </div>
  );
};

const TechnicalSkillsElement: FC<IProps> = ({
  type,
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
          {type}
        </h2>
        <div>
          {technologies.map((title: string, idx) => {
            return <Post key={title + idx} title={title} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};
