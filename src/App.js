import logo from './logo.svg';
import './App.css';

function App() {
  let post = '맛집 정보';
  return (
    <div className="App">
      <div className="title-name">
        <h3>나의 첫 블로그</h3>
      </div>
      <h3 style={{color:'red', fontsize:'16px'}}>{post}</h3>
    </div>
  );
}

export default App;
