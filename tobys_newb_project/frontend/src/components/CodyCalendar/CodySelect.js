import React, { useState } from 'react';
import './CodySelect.css';
/*from material-ui*/ 
import { makeStyles } from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';

const Dayslist= [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
  }));

export default function CategorySelect(props) {
    const classes = useStyles();
    const [cloth, setCloth] = useState([]);
    const [days, setDays] = useState([]);
    const keys = Object.keys(props.children);
    let change_i = -1;
    const handleChange = (event) => {
        let temp = [...cloth];
        temp[change_i] = event.target.value;
        setCloth(temp);
    };
    const handleChangeMultiple = (event) => {
        setDays(event.target.value);
    };
    const getCody = () => {
        console.log("wow");
    };
    

    return (
        <div>
            <ul className="Selects">
                {keys.map((category, index)=>{
                    change_i=index;
                    return (
                    <FormControl className={classes.formControl}>
                        <InputLabel>{category}</InputLabel>
                        <Select
                        value={cloth[index]}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>

                            {props.children[keys[index]].map((cloth, i) => {
                                return <MenuItem key={cloth.id} value={cloth.text}>{cloth.text}</MenuItem>;
                            })}
                        
                        </Select>
                        <FormHelperText>Select the {category}</FormHelperText>
                    </FormControl>
                    );
                })}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Days</InputLabel>
                        <Select
                        multiple
                        value={days}
                        onChange={handleChangeMultiple}
                        input={<Input />}
                        /*MenuProps={MenuProps}*/
                        >
                        {Dayslist.map((day) => (
                            <MenuItem key={day} value={day}>
                            {day}
                            </MenuItem>
                        ))}
                        </Select>
                        <FormHelperText>Select the Days</FormHelperText>
                    </FormControl>
            </ul>
            <div className="Button">
                <Button 
                    variant="contained" size="large" color="deep gray"
                    onClick={getCody}>
                    Upload
                </Button>
            </div>
        </div>
    );
}  