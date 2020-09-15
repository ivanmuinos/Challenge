import React, {useState} from "react"
import DateFnsUtils from '@date-io/date-fns'; 
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css"

export default function Timepicker(props) {

  const [selected, setSelected] = useState()

  const handleDate = time => {
    setSelected(time)
    props.onChange(time);
  }
  
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimePicker value={selected} onChange={handleDate} />
      </MuiPickersUtilsProvider>
    </div>
  );
}
