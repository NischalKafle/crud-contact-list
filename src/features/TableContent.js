import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';

function TableContent() {
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
      <UserList />
    </div>
  );
}

export default TableContent;
