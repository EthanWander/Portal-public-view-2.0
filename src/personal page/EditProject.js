import React, {useRef, useState} from 'react';

function EditProject({ showPopUp, setShowPopUp, editItem, item }){
  const [onForum, setOnForum] = useState(true);
  const textInput = useRef(null);
  const imgUrlInput = useRef(null);
  const textColorInput = useRef(null);
  
  const handleCancelBtn = (e) => {
    e.preventDefault();
    setShowPopUp(false)
  }
  
  const handleConfirmBtn = (e) => {
    e.preventDefault();
    let ret = item;
    ret.imgUrl = imgUrlInput.current.value;
    ret.text = textInput.current.value;
    ret.textColor = textColorInput.current.value;
    ret.empty = false;
    editItem(ret);
    setShowPopUp(false);
  }
  
  return(
    <div className="pop-up" style={{display: showPopUp ? "flex" : "none"}}>
      <form className="new-proj-form" style={{display: onForum ? "flex" : "none"}}>
        <div className="enter-url">
          Image URL: <input type="text" ref={imgUrlInput} id="img-url-input" defaultValue={item.empty ? "" : item.imgUrl} autoComplete="off"></input>
        </div>
        <div className="enter-text">
          Text: <input type="text" ref={textInput} id="txt-input" defaultValue={item.empty ? "" : item.text} autoComplete="off"></input>
        </div>
        <div className="enter-text-color">
          Text Color: rgb(<input type="text" ref={textColorInput} id="txt-color-input" defaultValue={item.empty ? "" : item.textColor} autoComplete="off"></input>)
        </div>
        <div className="forum-btns">
          <button id="cancel-proj" onClick={handleCancelBtn}>Cancel</button>
          <button id="confirm-proj" onClick={handleConfirmBtn}>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default EditProject;