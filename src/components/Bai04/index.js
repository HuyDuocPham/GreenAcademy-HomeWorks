import { useState } from "react";

const App = () => {
const [name, setName] = useState({fName: "", lName: ""})

const onChange = (e) => {
    setName({
        ...name,
        [e.target.name]: e.target.value
    })
}

return (
    <div>
        <input name = "fName" value={name.fName} onChange={onChange} placeholder = "FirstName" />
        <input name= "lName" value={name.lName} onChange={onChange} placeholder = "LastName" />
        <button>{`${name.lName} ${name.fName}`}</button>
    </div>
)
}

export default App;