import { useState } from 'react';

export default function Skills() {
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');

  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  return (
    <>
      <h2 className="info-heading">Skills</h2>
      {isEditing ? (
        <>
          <form>
            <label>
              Enter Your Skills:
              <input
                type="text"
                value={skill1}
                onChange={(e) => {
                  setSkill1(e.target.value);
                }}
              />
              <input
                type="text"
                value={skill2}
                onChange={(e) => {
                  setSkill2(e.target.value);
                }}
              />
              <input
                type="text"
                value={skill3}
                onChange={(e) => {
                  setSkill3(e.target.value);
                }}
              />
            </label>
          </form>
        </>
      ) : (
        <div className="personal-info">
          <p>{skill1}</p>
          <p>{skill2}</p>
          <p>{skill3}</p>
        </div>
      )}
      {isEditing ? (
        <>
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </>
  );
}
