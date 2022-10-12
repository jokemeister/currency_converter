import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { HomePage } from './pages/HomePage/HomePage';


function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index path='/' element={ <HomePage /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
