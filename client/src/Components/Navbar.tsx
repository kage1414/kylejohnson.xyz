import React, { FC, ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

interface IProps {
  switchTabs: any;
  windowWidth?: number;
  selectedTab: string;
}

const Navbar: FC<IProps> = ({ switchTabs, selectedTab }): ReactElement => {

  const { url } = useRouteMatch();
  console.log('url', url);

  const tabStyle = {
    cursor: 'pointer',
    display: 'inline',
    margin: '5px 5px -1px 5px',
    textDecoration: 'none'
  };

  return (
    <div style={{
      paddingLeft: '12px',
      paddingTop: '15px',
      minHeight: '30px',
      display: 'flex',
      borderBottom: 'solid rgb(95, 153, 207) 1px',
      width: '100vw'
    }}>
      <div style={{ alignSelf: 'flex-end' }}>
        <span style={{ fontSize: '30px' }} >kyle johnson</span>
      </div>
      <div style={{
        marginLeft: '15px',
        justifyContent: 'center',
        alignSelf: 'flex-end',
      }}>
        <ul style={{
          margin: '0 5px',
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <li >
            <Link
              to={`/tab/experience`}
              onClick={switchTabs}
              style={tabStyle}
              data-name={'experience'}
              className={selectedTab === 'experience' ? 'front' : 'back'}>{'experience'}</Link>
          </li>
          <li >
            <Link
              to={`/tab/technical_skills`}
              onClick={switchTabs}
              style={tabStyle}
              data-name={'technical_skills'}
              className={selectedTab === 'technical_skills' ? 'front' : 'back'}>{'technical_skills'}</Link>
          </li>
          <li
            style={{ textDecorationLine: 'none' }}>
            <Link
              to={`/tab/applications`}
              onClick={switchTabs}
              style={tabStyle}
              data-name={'applications'}
              className={selectedTab === 'applications' ? 'front' : 'back'}>{'applications'}</Link>
          </li>
          <li
            style={{ textDecorationLine: 'none' }}>
            <Link
              to={`/tab/education`}
              onClick={switchTabs}
              style={tabStyle}
              data-name={'education'}
              className={selectedTab === 'education' ? 'front' : 'back'}>{'education'}</Link>
          </li>
        </ul>
      </div>
    </div>
  );

};

export default Navbar;
