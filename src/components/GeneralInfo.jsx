// import React from 'react';
import { useState } from 'react';

function GeneralInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');

  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Personal Info</h2>
      {isEditing ? (
        <form>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </label>
          <label>
            Last Name:
            <input type="text" value={lastName}  onChange={(e) => SetLastName(e.target.value)}/>
          </label>
          <label>
            Email:
            <input type="email" value={email}  onChange={((e) => SetEmail(e.target.value))}/>
          </label>
          <label>
            Phone:
            <input type="number" value={phone} onChange={(e) => SetPhone(e.target.value)}/>
          </label>
        </form>
      ) : (
        <div>
          <p>First Name: {firstName}</p>
          <p> Last Name: {lastName}</p>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
        </div>
      )}
      {isEditing ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default GeneralInfo;
