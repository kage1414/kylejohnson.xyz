import {
  FC,
  ReactElement,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { Applications, Education, Experience, TechnicalSkills } from '../Pages';
import type {
  ApplicationData,
  EducationData,
  TechnicalSkillsData,
  ExperienceData,
} from '../Pages';
import { Sidebar } from '../Sidebar';
interface Props {
  selectedTab: number;
}

export function AdminContainer({ selectedTab }: Props): ReactElement {
  return <Grid container wrap='nowrap'></Grid>;
}
