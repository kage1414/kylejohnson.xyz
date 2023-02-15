import { Box, Paper } from "@mui/material";
import { ReactElement } from "react";
import { FullPostHeader, FullPostBody, FullPostFooterList } from ".";
import type { Description, Technology } from "dbschema/interfaces";

interface Props {
  title: string;
  subtitles?: string | Array<string | null | undefined>;
  descriptions?: Description[];
  technologies?: Technology[];
  time?: string;
  url?: string;
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
          backgroundColor: "rgb(240, 243, 252)",
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
