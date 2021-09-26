import { FC, ReactElement } from 'react';

interface IProps {
  tabs: Array<{ name: string; display: boolean; }>;
  switchTabs: any;
  windowWidth: number;
}

const Navbar: FC<IProps> = ({tabs, switchTabs, windowWidth}): ReactElement => {

  return (
    <div style={{ overflow: 'auto', display: 'inline-block', backgroundColor: 'rgb(207, 227, 247)'}}>
      <div style={{width: windowWidth, paddingLeft: '12px', paddingTop: '15px', height: '30px', display: 'flex', borderBottom: 'solid rgb(95, 153, 207) 1px'}}>
        <div style={{alignSelf: 'flex-end'}}>
          <span style={{fontSize: windowWidth > 650 ? '30px' : (windowWidth > 618 ? '25px' :'22px')}} >kyle johnson</span>
        </div>
        <div style={{marginLeft: '15px', justifyContent: 'center', alignSelf: 'flex-end'}}>
          <ul style={{margin: '0 5px'}}>
            {tabs.map((tab, idx) => {//@ts-ignore
              return <li onClick={switchTabs} style={{cursor: 'pointer', display: 'inline', margin: '5px'}} key={idx + tab.name} data-idx={idx} data-name={tab.name} className={ tab.display === true ? 'front' : 'back' }>{tab.name}</li>
              })}
          </ul>
        </div>
      </div>
    </div>
  )

}

export default Navbar