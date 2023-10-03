import { useState } from 'react';

export default function PictureUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        console.log(e.target.result);
        setSelectedImage(e.target.result);
      };
      reader.onerror = (error) => {
        console.log(error);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {isEditing ? (
        <>
          <form>
            <label>
              Select Image:
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                className="custom-file-input"
                onChange={handleImageUpload}
              />
            </label>
          </form>
        </>
      ) : (
        <div>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
      {isEditing ? (
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div onClick={handleEdit}>Edit</div>
      )}
    </>
  );
}
