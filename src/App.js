import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import {adduse} from './redux/Slice1'
import { adduser,removeuser }from './redux/Slice1';

function App() {
  const data = useSelector((state)=>state.user)
  console.log(data);
  const dispatch =useDispatch()
  function handleFunction(){
    dispatch(adduser())
  }
  function handleFunction2(){
    dispatch(removeuser())
  }

  return (
    <>
	<h1>This is Defalut React</h1>
    <button onClick={()=>handleFunction()}>Button to Addd</button>
    <button onClick={()=>handleFunction2()}>Button to remove</button>

    </>
  );
}

export default App;
