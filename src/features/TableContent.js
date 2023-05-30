import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchUsers } from '../redux/contactSlice';
function TableContent() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.contact.value);

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
 
  
  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '25px' }}>
        <Link to="/add" >
          <button
            type="button"
            className="btn btn-success"
            
          >
            Add Contact
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td style={{ display: 'flex' }}>
                <Link to={`/edit/${user.id}`}>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableContent;
