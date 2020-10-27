import React, {useRef} from 'react';

function AboutEditor({onAboutEditor, setOnAboutEditor, aboutTxt, setAboutTxt}){
  const aboutInput = useRef(null);
  
  const handleExitBtn = (e) => {
    e.preventDefault();
    setOnAboutEditor(false);
  }
  
  const handleSaveBtn = (e) => {
    setAboutTxt(aboutInput.current.value);
    setOnAboutEditor(false);
    e.preventDefault();
  }
  
  return(
    <div className="pop-up editor-pop-up" style={{display: onAboutEditor ? "block" : "none"}}>
      <div className="edit-header">
        <div>Edit About</div>
        <button className="exit-edit-btn" onClick={handleExitBtn}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <form id="edit-main">
        <textarea type="text" rows="4" defaultValue={aboutTxt} ref={aboutInput} id="about-input" autoComplete="off"></textarea>
        <div className="form-btns">
          <button id="save-btn" onClick={handleSaveBtn}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default AboutEditor;