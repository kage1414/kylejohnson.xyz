import { Box, Paper } from '@mui/material';
import { DescriptionJSON, TechnologyJSON } from 'apiTypes';
import { ReactElement } from 'react';

import { FullPostBody, FullPostFooterList, FullPostHeader } from '.';

interface Props {
  title?: string | null | undefined;
  subtitles?: string | Array<string | null | undefined>;
  descriptions?: DescriptionJSON[];
  technologies?: TechnologyJSON[];
  time?: string | null | undefined;
  url?: string | null | undefined;
}

export function FullPost({
  title,
  subtitles,
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
          subtitles={subtitles}
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
