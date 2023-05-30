import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/contactSlice';
import { Link } from 'react-router-dom';
import { deleteContact } from '../redux/contactSlice';

function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.contact.value);
  const loading = useSelector((state) => state.contact.loading);

  useEffect(() => {
    if (userList.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, userList]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
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
        {userList.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td style={{ display: 'flex' }}>
              <Link to={`/edit/${user.id}`}>
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
              </Link>
              <button type="button" className="btn btn-danger" onClick={()=>{dispatch(deleteContact({id:user.id}))}}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
