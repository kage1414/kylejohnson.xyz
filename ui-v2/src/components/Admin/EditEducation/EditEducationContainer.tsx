import { ReactElement } from 'react';

import { EditEducation } from '.';

interface Props {
  display?: boolean;
}

export function EditEducationContainer({ display }: Props): ReactElement {
  return <>{display && <EditEducation />}</>;
}
