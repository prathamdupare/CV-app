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
          0
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
              type="text"
              value={studyDate}
              onChange={(e) => SetStudyDate(e.target.value)}
            />
          </label>
        </form>
      ) : (
        <div>
          <p>College Name : {collegeName}</p>
          <p>Study Title : {studyTitle}</p>
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
