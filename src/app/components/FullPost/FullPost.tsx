import { Box, Paper } from '@mui/material';
import { ReactElement } from 'react';
import { FullPostHeader, FullPostBody, FullPostFooterList } from '.';
import type { Body } from './FullPostBody';

interface Props {
  title: string;
  subtitle?: string;
  body?: Body;
  time?: string;
  url?: string;
}

export function FullPost({
  title,
  subtitle,
  body,
  time,
  url,
}: Props): ReactElement {
  return (
    <Box
      sx={{
        marginBottom: 2,
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'rgb(240, 243, 252)',
          padding: 2,
        }}
        elevation={0}
      >
        <FullPostHeader
          title={title}
          subtitle={subtitle}
          time={time}
          url={url}
        />
        {body && <FullPostBody body={body} />}
        <FullPostFooterList />
      </Paper>
    </Box>
  );
}
