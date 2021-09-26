import {FC, ReactElement} from 'react';

const BottomBar: FC = (): ReactElement => (

  <div style={{justifyContent: 'center'}}>
    <div>
      Kyle Johnson | Full Stack Developer
    </div>
    <div>
      Indianapolis | Remote
    </div>
    <div>
      <a href={'mailto:kylejohnson92294@gmail.com'}>kylejohnson92294@gmail.com</a>
    </div>
    <div>
      <a href={'https://github.com/kage1414'}>
        github
      </a>
    </div>
    <div>
      <a href={'https://www.linkedin.com/in/kylejohnson922/'}>
        linkedin
      </a>
    </div>
  </div>

)

export default BottomBar;