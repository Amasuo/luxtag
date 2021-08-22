import react, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Editor from './editor';

function App() {
  const [data,setData] = useState('');
  return (
    <Editor data={data} setData={setData} />
  );
}

export default App;
