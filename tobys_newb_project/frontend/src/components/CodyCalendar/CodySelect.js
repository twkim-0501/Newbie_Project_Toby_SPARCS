import React, { useState } from 'react';
/*from material-ui*/ 
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

export default function CategorySelect(props) {
    const classes = useStyles();
    const [cloth, setCloth] = useState("");

    const handleChange = (event) => {
        setCloth(event.target.value);
    };
    const keys = Object.keys(props.children);

    return (
        <div>
            <ul>
                {keys.map((category, index)=>{
                    return (
                    <FormControl className={classes.formControl}>
                        <InputLabel>{category}</InputLabel>
                        <Select
                        value={cloth}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <ul>
                            {props.children[keys[index]].map((cloth, i) => {
                                return <MenuItem value={cloth.id}>{cloth.text}</MenuItem>;
                            })}
                        </ul>
                        </Select>
                        <FormHelperText>Some important helper text</FormHelperText>
                    </FormControl>
                    );
                })}
            </ul>
        </div>
    );
}  