import { ReactElement } from "react";
import { EditApplication } from ".";

interface Props {
  display?: boolean;
}

export function EditApplicationContainer({ display }: Props): ReactElement {
  return <>{display && <EditApplication />}</>;
}
