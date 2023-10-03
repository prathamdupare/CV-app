// import React from 'react';
import { useState } from 'react';

export default function Experience() {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="info-heading">Practical Experience</h2>
      {isEditing ? (
        <form>
          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </label>
          <label>
            Date From:
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </label>
          <label>
            Date Until:
            <input
              type="date"
              value={dateUntil}
              onChange={(e) => setDateUntil(e.target.value)}
            />
          </label>
        </form>
      ) : (
        <div className="personal-info">
          <p>Worked at {companyName}</p>
          <p>Positon Title: {positionTitle}</p>
          <p>Date From: {dateFrom}</p>
          <p>Date Until: {dateUntil}</p>
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
