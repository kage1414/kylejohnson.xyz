import { Grid } from "@mui/material";

import { ReactElement, useEffect } from "react";

import {
  EditApplicationContainer,
  EditEducationContainer,
  EditExperienceContainer,
  EditTechnicalSkillsContainer,
} from ".";
import { ComponentProps } from "../HomePage";
import { useNavigate } from "react-router";

export function AdminContainer({
  selectedTab,
  user,
  loadingUser,
}: ComponentProps): ReactElement {
  const navigate = useNavigate();
  useEffect(() => {
    console.log({ user, loadingUser });
    if (!loadingUser && !user) navigate("/login");
  }, [user, loadingUser, navigate]);

  return (
    <Grid container wrap="nowrap">
      {user?.username && (
        <>
          <EditExperienceContainer display={selectedTab === 0} />
          <EditTechnicalSkillsContainer display={selectedTab === 1} />
          <EditApplicationContainer display={selectedTab === 2} />
          <EditEducationContainer display={selectedTab === 3} />
        </>
      )}
    </Grid>
  );
}
