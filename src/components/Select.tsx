
import { useState } from "react"
import { Link, Route, useHistory } from "react-router-dom"
import Result from "./Result"

const Select = () => {
    let history = useHistory()
    
    const [start,setStart] = useState("")
    const [end,setEnd] = useState("")
    const pressed = (st: string, ed: string) => {
        let dateStart = new Date(st)
        let dateEnd = new Date(ed)
        if(st === "" || ed === "" || dateStart > dateEnd)
            alert("Plese select start date and end date correctly")
        else
            history.push("result?start="+st+"&end="+ed);
            <Result/>
    }
    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            <span>From date</span>
            <input type='date' onChange={e => setStart(e.target.value)}></input>
            <span>To date</span>
            <input type='date' onChange={e => setEnd(e.target.value)}></input>
            <br />
            <button onClick={() => pressed(start,end)}>Get data</button>
        </div>
    )
}

export default Select