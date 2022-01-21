import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import TechnicalSkills from './TechnicalSkills';
import Applications from './Applications';
import Experience from './Experience';
import Education from './Education';

interface IProps {
  windowWidth?: number;
  mobile?: boolean;
}

const Body: FC<IProps> = (): ReactElement => {

  return (

    <div style={{
      flexBasis: '0',
      flexGrow: 999
    }}>
      <Switch>
        <Route exact
          path={'/'}>
          <h3>{'Please select a tab'}</h3>
        </Route>
        <Route
          path={`/tab`}>
          <Switch>
            <Route path={`/tab/experience`}>
              <Experience />
            </Route>
            <Route path={`/tab/education`}>
              <Education />
            </Route>
            <Route path={`/tab/technical_skills`}>
              <TechnicalSkills />
            </Route>
            <Route path={`/tab/applications`}>
              <Applications />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>

  );

};

export default Body;
