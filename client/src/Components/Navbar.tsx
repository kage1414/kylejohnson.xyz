import { FC, ReactElement } from 'react';

interface IProps {
  tabs: Array<{ name: string; display: boolean; }>;
  switchTabs: any;
}

const Navbar: FC<IProps> = ({tabs, switchTabs}): ReactElement => {

  return (
    <div style={{paddingLeft: '12px', paddingTop: '15px', height: '30px', display: 'flex', borderBottom: 'solid rgb(95, 153, 207) 1px'}}>
      <div style={{alignSelf: 'flex-end'}}>
        <span style={{fontSize: '30px'}} >kyle johnson</span>
      </div>
      <div style={{marginLeft: '15px', justifyContent: 'center', alignSelf: 'flex-end'}}>
        <ul style={{margin: '0 5px'}}>
          {tabs.map((tab, idx) => {//@ts-ignore
            return <li onClick={switchTabs} style={{cursor: 'grab', display: 'inline', margin: '5px'}} key={idx + tab.name} data-idx={idx} data-name={tab.name} className={ tab.display === true ? 'front' : 'back' }>{tab.name}</li>
            })}
        </ul>
      </div>
    </div>
  )

}

export default Navbar