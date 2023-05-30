import './App.css';
import { Routes, Route } from 'react-router-dom';
import TableContent from './features/TableContent';
import Edit from './features/Edit';
import { useSelector } from 'react-redux';
import Add from './features/Add';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TableContent />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
