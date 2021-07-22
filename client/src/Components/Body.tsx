import { FC, ReactElement } from 'react';
import { Data } from '../../../server/db.js';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Sidebar from './Sidebar'
import Experience from './Experience';
import Education from './Education';

interface IProps {
  selectedTab: { name: string; display: boolean; };
}

const Body: FC<IProps> = ({selectedTab}): ReactElement => {

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <div style={{flexBasis: '130px', flexGrow: 1}}>
        <Sidebar />
      </div>
      <div style={{flexBasis: '0', flexGrow: 999}}>
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
      {selectedTab.name === 'experience' &&
        <div style={{marginLeft: '15px', display: 'flex', alignContent: 'flex-start', flexFlow: 'row wrap'}}>
          {Data[selectedTab.name].map((data: {employer: string; description: Array<string>; position: string; time: string;}, idx) => (
            <Experience description={data.description} employer={data.employer} time={data.time} position={data.position} key={data.employer + idx}/>
          ))}
        </div>
      }
      {selectedTab.name === 'education' &&
        <div style={{marginLeft: '15px', display: 'flex', alignContent: 'flex-start', flexFlow: 'row wrap'}}>
          {Data[selectedTab.name].map((data: {school: string; time: string; degree?: string; certificate?: string;}, idx) => (
            <Education school={data.school} degree={data.degree} time={data.time} certificate={data.certificate} key={data.school + idx}/>
          ))}
        </div>
      }
      </div>
    </div>
  )

}

export default Body