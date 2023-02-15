import { ReactElement } from "react";
import { EditExperience } from ".";

interface Props {
  display?: boolean;
}

export function EditExperienceContainer({ display }: Props): ReactElement {
  return <>{display && <EditExperience />}</>;
}
