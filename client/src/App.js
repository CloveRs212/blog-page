import './App.css';
import Post from './components/post';
import Header from './components/header';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route index element={ 
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />
      <Route path={'/login'} element={
        <div>login</div>
      }
      />
    </Routes>
  );
}

export default App;
