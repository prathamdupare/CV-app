// import React from 'react';
import { useState } from 'react';

export default function Education() {
  const [collegeName, setCollegeName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyDate, SetStudyDate] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="info-heading">Education</h2>
      {isEditing ? (
        <form>
          <label>
            College Name:
            <input
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </label>
          <label>
            Study Title :
            <input
              type="text"
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
            />
          </label>
          <label>
            Date of Study:
            <input
              type="date"
              value={studyDate}
              onChange={(e) => SetStudyDate(e.target.value)}
            />
          </label>
        </form>
      ) : (
        <div className="personal-info">
          <p id="college-name">{collegeName}</p>
          <p>{studyTitle}</p>
          <p>Date of Study : {studyDate}</p>
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
