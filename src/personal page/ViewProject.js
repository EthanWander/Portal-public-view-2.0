import React, { useRef, useState, useEffect } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import '../styles/view-proj.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width, height};
}

function ViewProject({viewProj, setViewProj}){
  const root = useRef(null);
  const codeEdit = useRef(null);
  const [winDim, setWinDim] = useState(getWindowDimensions());
  const [height, setHeight] = useState(null);
  
  const handleXBtnClick = () => {
    setViewProj(false);
  }
  
  useEffect(() => {
    let h = winDim.height * 0.8;
    let navH = 2 * root.current.style.fontSize;
    setHeight(h+navH);
  }, [])
  
  return(
    <div className="view-proj" ref={root} style={{height: height, display: viewProj ? "block" : "none"}}>
      <div className="proj-nav-bar">
        <div className="nav-list">
          <div className="code-tab nav-item">code</div>
        </div>
        <div className="proj-window-options">
          <button onClick={handleXBtnClick} className="x-btn nav-item">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      
      <div className="proj-content">
        <div className="file-tree-container">
        </div>
        <div className="code-window">
          <CodeMirror
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
              mode: 'xml',
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              lint: true
            }}
            onChange={(editor, data, value) => {
            }}
            ref={codeEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewProject;