import { FC, ReactElement } from 'react';
import { Data } from '../../../server/db.js';
import TechnicalSkills from './TechnicalSkills';

interface IProps {
  selectedTab: { name: string; display: boolean; };
}

const Body: FC<IProps> = ({selectedTab}): ReactElement => {

  return (
    <div>
    {selectedTab.name === 'technical skills' &&
      <div style={{marginLeft: '15px'}}>
        {Data[selectedTab.name].map((data: {type: string; technologies: Array<string>;}, idx) => <TechnicalSkills type={data.type} technologies={data.technologies} key={data.type + idx}/>)}
      </div>
    }
    </div>
  )

}

export default Body