import { useState } from 'react';
import './App.css';
import Forminput from './Component/Forminput';

function App() {
  const [values, setValue] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id:1,
      name: "username",
      type:"text",
      placeholder:"username",
      label: "username"   
   },

   {
    id:2,
    name: "email",
    type:"text",
    placeholder:"email",
    label: "email"   
 },

 {
  id:3,
  name: "birthday",
  type:"text",
  placeholder:"birthday",
  label: "birthday"   
},

{
id:4,
name: "Password",
type:"text",
placeholder:"Password",
label: "Password"   
},

{
id:5,
name: "Confirm Password",
type:"text",
placeholder:"Confirm Password",
label: "Confirm Password"   
}
  ]

  const handleSubmit =(e)=> {
    e.preventDefault()
  }

  const OnChange = (e) => {
    setValue({...values, [e.target.name]: e.target.value})
  }

  console.log(values);
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      {
        inputs.map((input) => (
      <Forminput key={input.id} {...input} value={values[input.name]} OnChange={OnChange}/>
        ))
      }

      <button>submit</button>
    </form>
    </div>
  );
}

export default App;
