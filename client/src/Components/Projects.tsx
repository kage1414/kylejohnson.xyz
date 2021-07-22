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
        <div>
          <h2 style={{height: '16px', padding: '3px', border: 'rgb(199, 199, 199) 1px solid', margin: '6px', backgroundColor: 'rgb(240, 243, 252'}}><a href={url}>{name}</a></h2>
          <p>{description.map((text: string) => (<div>-{text}</div>))}</p>
          <div>
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