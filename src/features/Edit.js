import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editEmail } from '../redux/contactSlice';
import { useNavigate,useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [email, setEmail] = useState('');

  const handleEdit = (e) => {
    e.preventDefault();

    dispatch(editEmail({ id: parseInt(id), email: email }));

    setEmail('');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center',width:'100%' }}>
      <div style={{ border: '2px black solid',width:'100%' }}>
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter new email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ margin: '5px' }}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
