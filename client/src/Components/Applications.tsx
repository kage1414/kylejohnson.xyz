import React, { FC, ReactElement } from 'react';
import Post from './Post';

interface IProps {
  name: string;
  technologies: Array<string>;
  url: string;
  description: Array<string>;
}

interface IData {
  applicationData: Array<any>;
}

const Applications: FC<IData> = ({ applicationData }) => {

  return (
    <div style={{
      marginLeft: '15px',
      display: 'flex',
      alignContent: 'flex-start',
      flexFlow: 'row wrap'
    }}>
      {applicationData.map((data: { name: string; technologies: Array<string>; url: string; description: Array<string>; }, idx: number) => (
        <ApplicationElement description={data.description}
          name={data.name}
          technologies={data.technologies}
          url={data.url}
          key={data.name + idx} />
      ))}
    </div>
  );
};

const ApplicationElement: FC<IProps> = ({ name, technologies, url, description }): ReactElement => {

  return (
    <div
      style={
        {
          margin: '10px 0',
          flex: '1'
        }
      }>
      <div
        style={
          {
            margin: '6px'
          }
        }>
        <h2
          style={
            {
              height: '16px',
              margin: '6px 0',
              padding: '3px',
              border: 'rgb(199, 199, 199) 1px solid',
              backgroundColor: 'rgb(240, 243, 252'
            }
          }>
          <a
            href={url}>
            {name}
          </a>
        </h2>
        <ul style={{ marginBottom: '12px' }}>{description.map((text: string, idx: number) => (<li key={text + idx}
          style={{
            margin: '5px 0',
            lineHeight: '18px',
            color: idx % 2 === 0 ? 'black' : '#686868'
          }}>{text}</li>))}</ul>
        <div style={{ margin: '6px' }}>
          <div style={{
            height: '16px',
            margin: '6px 0',
            fontWeight: 100,
            padding: '3px',
            border: 'rgb(199, 199, 199) 1px solid',
            backgroundColor: 'rgb(240, 243, 252'
          }}>Tech Stack:</div>
          {technologies.map((title: string, idx) => {
            return <Post key={title + idx}
              title={title}
              idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Applications;
