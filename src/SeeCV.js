import React from 'react';
import CVfile from './images/Eitan Wander - CV.pdf';

function SeeCV(props){
  const {
    viewCV,
    setViewCV,
    winDim
  } = props;
  
  const handleExitClick = () => {
    setViewCV(false);
  }
  
  return(
    <div className="SeeCV" style={{display: viewCV ? "flex" : "none"}}>
      <embed src={CVfile} width="700" className="cv-container">
      </embed>
      <button className="exit-cv-btn" onClick={handleExitClick}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}

export default SeeCV;