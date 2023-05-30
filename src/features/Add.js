import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';

function Add() {
  
  var min = 1;
   var max = 10000;
   var rand =  min +Math.floor (Math.random() * (max-min));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.contact.value);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = () => {
    const newContact = {
      id: rand ,
      name,
      email,
    };

    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    navigate('/');
  };

  return (
    
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height:'100vh', textAlign: 'center',width:'100%' }}>
        <div style={{ border: '2px black solid' ,width:'100%'}}>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter new name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" style={{ margin: '5px' }} onClick={() => handleAddContact()}>
              Add
            </button>
          </form>
        </div>
      </div>
    
  );
}

export default Add;

