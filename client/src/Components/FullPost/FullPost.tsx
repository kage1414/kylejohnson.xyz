import { Box, Paper } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { FullPostHeader } from './FullPostHeader';
import { FullPostBody } from './FullPostBody';
import { FullPostFooterList } from './FullPostFooterList';

interface IProps {
  title: string;
  subtitle?: string;
  body?: Array<string>;
  time?: string;
  url?: string;
}

export const FullPost: FC<IProps> = ({
  title,
  subtitle,
  body,
  time,
  url,
}): ReactElement => {
  const buttons = [
    `${Math.floor(Math.random() * 100)} comments`,
    'source',
    'share',
    'save',
    'hide',
    'give award',
    'report',
    'crosspost',
    'hide all child comments',
  ];

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
        <FullPostFooterList buttons={buttons} />
      </Paper>
    </Box>
  );
};
