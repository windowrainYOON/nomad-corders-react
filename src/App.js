import {useState, useEffect} from "react";

//to-do list 만들기

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => { 
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDo("");
//     setToDos((currentArray) => [toDo, ...currentArray]);
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>My To Dos {toDos.length}</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
//         <button>Add To Do</button>
//       </form>
//       <hr/>
//       <ul>
//         {toDos.map((item, index)=> (
//           <li key={index}>{item}</li>
//           ))}
//       </ul>
//     </div>
//   );
// }

//coin tracker 만들기

// function App(){
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([])
//   useEffect(()=> {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   }, [])
//   return <div>
//     <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//     {loading ? <strong>Loading...</strong> : (
//       <select>
//         {coins.map((coin) => <option>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
//       </select>
//     )}
//   </div>
// }
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

function App(){
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>;
}

export default App;
