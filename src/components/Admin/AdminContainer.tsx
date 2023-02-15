import { ReactElement } from "react";
import { Grid } from "@mui/material";
interface Props {
  selectedTab: number;
}

import {
  EditExperienceContainer,
  EditTechnicalSkillsContainer,
  EditApplicationContainer,
  EditEducationContainer,
} from ".";

export function AdminContainer({ selectedTab }: Props): ReactElement {
  return (
    <Grid container wrap="nowrap">
      <EditExperienceContainer display={selectedTab === 0} />
      <EditTechnicalSkillsContainer display={selectedTab === 1} />
      <EditApplicationContainer display={selectedTab === 2} />
      <EditEducationContainer display={selectedTab === 3} />
    </Grid>
  );
}
