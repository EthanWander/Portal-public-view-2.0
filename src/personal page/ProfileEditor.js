import React, { useRef } from 'react';

function ProfileEditor({ profile, setProfile, onProfileEditor, setOnProfileEditor }){
  const nameInput = useRef(null);
  const occupationInput = useRef(null);
  const emailInput = useRef(null);
  
  const handleExitBtn = (e) => {
    e.preventDefault();
    setOnProfileEditor(false);
  }
  
  const handleSaveBtn = (e) => {
    e.preventDefault();
    setProfile({
      name: nameInput.current.value,
      occupation: occupationInput.current.value,
      email: emailInput.current.value
    });
    setOnProfileEditor(false);
  }
  
  return(
    <div className="pop-up editor-pop-up" style={{display: onProfileEditor ? "block" : "none"}}>
      <div className="edit-header">
        <div>Edit Profile</div>
        <button className="exit-edit-btn" onClick={handleExitBtn}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <form id="edit-main">
        <div>
          Name: <input type="text" ref={nameInput} defaultValue={profile.name} id="name-input" autoComplete="off" />
        </div>
        <div>
          Occupation: <input type="text" ref={occupationInput} defaultValue={profile.occupation} id="occupation-input" autoComplete="off" />
        </div>
        <div>
          Email: <input type="text" ref={emailInput} defaultValue={profile.email} id="email-input" autoComplete="off" />
        </div>
        <div className="form-btns">
          <button id="save-btn" onClick={handleSaveBtn}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileEditor;