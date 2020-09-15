import React, {useState} from "react"
import DateFnsUtils from '@date-io/date-fns'; 
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import "react-datepicker/dist/react-datepicker.css"

export default function DatePickers(props) {

  const [selected, setSelected] = useState()
  const today = new Date()
  const maxDate = new Date()

  const handleDate = date => {
    setSelected(date)
    props.onChange(date);
  }
  
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
                format={"dd/MM/yyyy"}
                value={selected}
                onChange={date => handleDate(date)}
                autoOk={true}
                clearable
                minDate={today}
                maxDate={maxDate.setDate(today.getDate()+15)}
                placeholder="dd/MM/yyyyy"
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
