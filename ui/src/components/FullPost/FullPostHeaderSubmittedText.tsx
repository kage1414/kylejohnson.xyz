import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface Props {
  time: string;
}

export function FullPostHeaderSubmittedText({ time }: Props): ReactElement {
  return (
    <Box>
      <Typography
        sx={{
          display: 'inline',
          fontSize: '10px',
          color: 'rgb(136, 136, 136)',
        }}
      >
        {'submitted '}
        <span style={{ color: 'blue' }}>{time}</span>
        {' by'}
        {' kyle johnson'}
      </Typography>
    </Box>
  );
}
