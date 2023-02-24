import { Box, Grid, List, ListItem, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const BUTTONS = [
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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '&$span $awardSpan': {
      textDecorationColor: 'rgb(136, 136, 136)',
      fontWeight: 700,
      fontSize: '10px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  item: {
    display: 'inline-block',
    padding: '0 4px',
    fontSize: '10px',
    lineHeight: '16px',
    height: '16px',
  },
  span: {
    color: 'rgb(136, 136, 136)',
    textDecorationColor: 'rgb(136, 136, 136)',
    fontWeight: 700,
    fontSize: '10px',
    padding: 1,
  },
  award: {
    color: 'rgb(167, 145, 40)',
    textDecorationColor: 'rgb(136, 136, 136)',
    fontWeight: 700,
    fontSize: '10px',
  },
}));

export function FullPostFooterList() {
  const randomCommentnumber = Math.floor(Math.random() * 100);
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {`${randomCommentnumber} comments`}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'source'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'share'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'save'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'hide'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.award}>
          {'give award'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'report'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'hide all child comments'}
        </Box>
      </Grid>
      <Grid item className={classes.item}>
        <Box component='span' className={classes.span}>
          {'crosspost'}
        </Box>
      </Grid>
    </Grid>
  );
}
