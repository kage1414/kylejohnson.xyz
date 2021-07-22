import { FC, ReactElement } from 'react';
import { Data } from '../../../server/db.js';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';

interface IProps {
  selectedTab: { name: string; display: boolean; };
}

const Body: FC<IProps> = ({selectedTab}): ReactElement => {

  return (
    <div>
    {selectedTab.name === 'technical skills' &&
      <div style={{marginLeft: '15px', display: 'flex', alignContent: 'flex-start', flexFlow: 'row wrap'}}>
        {Data[selectedTab.name].map((data: {type: string; technologies: Array<string>;}, idx) => <TechnicalSkills type={data.type} technologies={data.technologies} key={data.type + idx}/>)}
      </div>
    }
    {selectedTab.name === 'projects' &&
      <div style={{marginLeft: '15px', display: 'flex', alignContent: 'flex-start', flexFlow: 'row wrap'}}>
        {Data[selectedTab.name].map((data: {name: string; technologies: Array<string>; url: string; description: Array<string>;}, idx) => (
          <Projects description={data.description} name={data.name} technologies={data.technologies} url={data.url} key={data.name + idx}/>
        ))}
      </div>
    }
    </div>
  )

}

export default Body