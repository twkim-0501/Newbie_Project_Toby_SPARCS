import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    
    root: {
        
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

export default function ChipsArray(props) {
    const classes = useStyles();
    const {cody} = props;
    return (
        <div>
            <Chip
                label={cody.top}
                className={classes.chip}
            />
            <Chip
                label={cody.bottom}
                className={classes.chip}
            />
            <Chip
                label={cody.shoes}
                className={classes.chip}
            />
            <Chip
                label={cody.outer}
                className={classes.chip}
            />
            <Chip
                label={cody.accessory}
                className={classes.chip}
            />
        </div>
    );

}