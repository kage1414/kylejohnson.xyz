import React, { FC, ReactElement } from 'react';
import { Data } from '../../../server/db.js';
import Post from './Post';

interface IProps {
  selectedTab: { name: string; display: boolean; };
}

const Body: FC<IProps> = ({selectedTab}): ReactElement => {

  return (
    <div>
      
    {(selectedTab.name === 'technical skills' || selectedTab.name === 'projects') &&
      <div style={{marginLeft: '15px'}}>
        {Data[selectedTab.name].map((data: any) => <Post data={data} />)}
      </div>
    }
    </div>
  )

}

export default Body