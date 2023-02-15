import { ReactElement } from "react";
import { EditTechnicalSkills } from ".";

interface Props {
  display?: boolean;
}

export function EditTechnicalSkillsContainer({ display }: Props): ReactElement {
  return <>{display && <EditTechnicalSkills />}</>;
}
