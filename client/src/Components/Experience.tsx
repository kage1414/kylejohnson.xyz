import React, { FC, ReactElement } from 'react';

interface IProps {
  employer: string;
  time: string;
  description: Array<string>;
  position: string;
  logo?: string;
}

interface IData {
  experienceData: Array<any>;
}

const Experience: FC<IData> = ({ experienceData }): ReactElement => {

  return (
    < div style={{
      display: 'flex',
      alignContent: 'flex-start',
      flexFlow: 'row wrap'
    }}>
      {
        experienceData.map((data: { employer: string; description: Array<string>; position: string; time: string; logo: string; }, idx: number) => (
          <ExperienceElement description={data.description}
            employer={data.employer}
            time={data.time}
            position={data.position}
            key={data.employer + idx}
            logo={data.logo} />
        ))
      }
    </div >
  );
};

const ExperienceElement: FC<IProps> = ({ employer, time, description, position }): ReactElement => {

  const flatListButtons = [`${Math.floor(Math.random() * 100)} comments`, 'source', 'share', 'save', 'hide', 'give award', 'report', 'crosspost', 'hide all child comments'];

  return (
    <div style={{
      margin: '10px 3px',
      flex: '1'
    }}>
      <div style={{
        backgroundColor: 'rgb(240, 243, 252)',
        display: 'inline-block'
      }}>
        <div style={{
          margin: '6px',
          // backgroundColor: 'rgb(240, 243, 252)'
        }}>
          <p style={{
            color: 'rgb(0, 0, 255)',
            marginBottom: '1px',
            backgroundColor: 'rgb(240, 243, 252)',
            fontFamily: 'verdana, arial, helvetica, sans-serif',
            fontSize: '16px'
          }}>{position}</p>
          <p style={{
            marginBottom: '1px',
            backgroundColor: 'rgb(240, 243, 252)',
            fontFamily: 'verdana, arial, helvetica, sans-serif',
            fontSize: '16px',
            fontWeight: 100
          }}>
            {employer}
          </p>
          <p style={{
            color: 'rgb(136, 136, 136)',
            fontWeight: 'normal',
            fontSize: '10px'
          }}>{'submitted '}<span style={{ color: 'blue' }}>{`${time} `}</span>{'by '}
            <a style={{
              color: 'rgb(51, 102, 153)'
            }}>{'kyle johnson'}</a></p>
        </div>
        <div>
          <div>
            <div style={
              {
                margin: '5px 0',
                backgroundColor: 'rgb(250, 250, 250)',
                borderRadius: '7px',
                border: '1px black solid',
                padding: '10px',
                display: 'inline-block'
              }}>{description.map((text: string, idx: number) => (
                <p key={text + idx}
                  style={{
                    marginBottom: '5px',
                    minWidth: '300px',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px'
                  }}>{`${text}`}</p>))}</div>
          </div>
        </div>
        <ul style={{
          padding: '0 1px'
        }}>
          {flatListButtons.map((button) => (
            <li key={employer + button}
              style={{
                display: 'inline-block',
                padding: '0 4px',
                fontSize: '10px',
                lineHeight: '16px',
                height: '16px'
              }}><a style={{
                textDecorationColor: 'rgb(136, 136, 136)',
                fontWeight: 700,
                fontSize: '10px',
                color: button === 'give award' ? 'rgb(167, 145, 40)' : 'rgb(136, 136, 136)'
              }}>{button}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
