import { ReactElement } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FullPostHeaderSubmittedText } from '.';

interface Props {
  title: string;
  subtitle?: string | null;
  time?: string;
  url?: string;
}

export function FullPostHeader({
  title,
  subtitle,
  url,
  time,
}: Props): ReactElement {
  return (
    <Box>
      <Link
        href={url}
        color='secondary'
        underline={url ? 'hover' : 'none'}
        component={Typography}
      >
        {title}
      </Link>
      {subtitle && <Typography>{subtitle}</Typography>}
      {time && <FullPostHeaderSubmittedText time={time} />}
    </Box>
  );
}
