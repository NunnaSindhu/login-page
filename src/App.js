import { useState } from "react";
import "./App.css";
//1. Build Search filter in React
// function App() {
//   const list = [
//     "Banana",
//     "Apple",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Watermelon",
//   ];
//   const [filteredList, setFilteredList] = useState(list);
//   const handleSearch = (event) => {
//     if (filteredList === "") {
//       setFilteredList(list);
//     }
//     const filteredValues = list.filter((item) =>
//       item.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
//     );
//     setFilteredList(filteredValues);
//   };

//   return (
//     <div className="App">
//       <div>1. Build Search filter in React</div>
     
//         Search:<input
//           type="search"
//           placeholder="serach here"
//           onChange={handleSearch}
//         />
   
//       {filteredList.map((item) => (
//         <div>{item}</div>
//       ))}
//     </div>
//   );
// }

//2. Simple counter exercise

// function App(){
// const [count,setCount]=useState(0);
// const increaseCount=()=>{
// setCount(count>=5?5:count+1);
// }
// const decreaseCount=()=>{
// setCount(count>0?count-1:0);
// }

// return (
//   <div className="App">
//     Count:{count}
//     <button onClick={increaseCount}>Increase</button>
//     <button onClick={decreaseCount}>Decrease</button>
//   </div>
// )
// }

// Create a Checklist in React

// function App(){
//   const initialState={
//     isCitizen:false,
//     isOver21:false,
//   }
//   const [state, setState]=useState(initialState);
// const handleChange=(e)=>{
//   if(e.target.type=="checkbox"){
// setState({...state,[e.target.name]:e.target.checked })
//   }
  
// }
// let {isCitizen, isOver21}=state;
//   return (
    
// <div className="App">
//   <h1>Are you a Citizen: {isCitizen?"Yes":"No"}</h1>
//    <h1>Are you Over 21 years: {isOver21?"Yes":"No"}</h1>
// <label>
// Are you a Citizen: <input type="checkbox" name="isCitizen" checked={isCitizen} onChange={handleChange} />
// </label>
// <label>
// Are you Over 21 years: <input type="checkbox" name="isOver21" checked={isOver21} onChange={handleChange} />
// </label>
// </div>
//   )
// }

//Simple Login form in React
// import LoginPage from './components/LoginPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   const adminUser={
//       email: 'admin@example.com',
//       password:'admin@123'
//   }
//   const [user,setUser]=useState({name:"",email:"",password:""});
//   const [error,setError]=useState("")
//   const loginDetails = (details)=>{
// console.log(details)
// if(details.email===adminUser.email&&details.password===adminUser.password){
//     setUser({name:details.name})
// }
// else{
//     console.log("Invalid Credentials Please try again")
//     setError("Invalid Credentials Please try again")
// }

//   }
//   const Logout=()=>{
// setUser({name:"",password:""})
//   }

// return (
//     <div className="App">
//         {(user.name !=="")?(<div>Welcome {user.name}<br/>
//         <button onClick={Logout}>Logout</button>
//         </div>):<LoginPage loginDetails={loginDetails} error={error}/>}
        
//     </div>
// )

// }


//Print data from REST API

// function App() {
    
// }

export default App;
