import { ReactElement } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FullPostHeaderSubmittedText } from '.';

interface Props {
  title: string;
  subtitles?: string | Array<string | null | undefined>;
  time?: string;
  url?: string;
}

export function FullPostHeader({
  title,
  subtitles,
  url,
  time,
}: Props): ReactElement {
  if (!Array.isArray(subtitles) && typeof subtitles === 'string') {
    subtitles = [subtitles];
  }

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
      {subtitles &&
        subtitles
          .filter((subtitle) => !!subtitle)
          .map((subtitle, idx) => (
            <Typography key={`${subtitle} ${idx}`}>{subtitle}</Typography>
          ))}
      {time && <FullPostHeaderSubmittedText time={time} />}
    </Box>
  );
}
