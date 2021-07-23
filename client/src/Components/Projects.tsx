import { FC, ReactElement } from 'react';
import Post from './Post';

interface IProps {
  name: string;
  technologies: Array<string>;
  url: string;
  description: Array<string>;
}

const Projects: FC<IProps> = ({name, technologies, url, description}): ReactElement => {

  return (
      <div style={{margin: '10px 0', flex: '1'}}>
        <div style={{margin: '6px'}}>
          <h2 style={{height: '16px', margin: '6px 0', padding: '3px', border: 'rgb(199, 199, 199) 1px solid', backgroundColor: 'rgb(240, 243, 252'}}><a href={url}>{name}</a></h2>
          <ul style={{margin: '6px'}}>{description.map((text: string, idx: number) => (<li style={{margin: '5px 0', lineHeight: '18px', color: idx % 2 === 0 ? 'black' : '#ff702d'}}>{text}</li>))}</ul>
          <div style={{margin: '6px'}}>
            <span>Tech Stack:</span>
            {technologies.map((title: string, idx) => {
              return <Post key={title + idx} title={title} idx={idx} />
            })}
          </div>
        </div>
      </div>
  )
}

export default Projects;