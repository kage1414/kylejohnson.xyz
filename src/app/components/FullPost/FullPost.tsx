import { Box, Paper } from '@mui/material';
import { ReactElement } from 'react';
import { FullPostHeader, FullPostBody, FullPostFooterList } from '.';
import type { Description, Technology } from 'dbTypes';

interface Props {
  title: string;
  subtitle?: string | null;
  descriptions?: Description[];
  technologies?: Technology[];
  time?: string;
  url?: string;
}

export function FullPost({
  title,
  subtitle,
  descriptions,
  technologies,
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
        {(descriptions || technologies) && (
          <FullPostBody
            descriptions={descriptions}
            technologies={technologies}
          />
        )}
        <FullPostFooterList />
      </Paper>
    </Box>
  );
}
