import React, { useRef, useState, useEffect } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import '../../styles/view-proj.css';
import 'codemirror/addon/display/autorefresh';
import ProjectFile from './ProjectFile.js';
import {defaultTree} from './DefaultTree.js';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width, height};
}

function ViewProject({viewProj, setViewProj}){
  const root = useRef(null);
  const codeEdit = useRef(null);
  const [winDim, setWinDim] = useState(getWindowDimensions());
  const [height, setHeight] = useState(null);
  const [htmlCode, setHtmlCode] = useState("<h1>hello</h1>");
  const [cssCode, setCssCode] = useState("html{background-color: blue;}");
  const [jsCode, setJsCode] = useState("");  
  const [codeType, setCodeType] = useState("xml");
  const [first, setFirst] = useState(true);
  const [selTab, setSelTab] = useState("code");
  const [appFile, setAppFile] = useState(defaultTree);
  
  const srcDoc = "<html><body>" + htmlCode + "</body><style>" + cssCode + "</style></html>";
  
  const handleXBtnClick = () => {
    setViewProj(false);
  }
  
  const handlePrevClick = () => {
    setSelTab("preview");
  }
  const handleCodeClick = () => {
    setSelTab("code");
  }
  
  const handleChange = (editor, data, value) => {
    if(!first) setHtmlCode(value);
    else setFirst(false);
  }
  
  const getValue = () => {
    switch(codeType){
      case "xml":
        return htmlCode;
        break;
      case "css":
        return cssCode;
        break;
      case "js":
        return jsCode;
        break;
    }
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
          <button className="code-tab nav-item" onClick={handleCodeClick} 
            style={{zIndex: (selTab === "code") ? 3 : 1, borderBottom: "2rem solid rgb" + ((selTab === "code") ? "(0,70,70)" : "(25,0,43)")}}>
            code
          </button>
          <button className="code-tab nav-item" onClick={handlePrevClick} 
            style={{zIndex: (selTab === "preview") ? 3 : 1, borderBottom: "2rem solid rgb" + ((selTab === "preview") ? "(0,70,70)" : "(25,0,43)")}}>
            preview
          </button>
        </div>
        <div className="proj-window-options">
          <button onClick={handleXBtnClick} className="x-btn nav-item">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      
      <div className="proj-content">
        <div className="file-tree-container" style={{display: (selTab === "code") ? "block" : "none"}}>
          <div className="project-file-tree">
            <ProjectFile properties={appFile} tree={appFile} setTree={setAppFile} setCodeType={setCodeType}/>
          </div>
        </div>
        <div className="code-window" style={{display: (selTab === "code") ? "block" : "none"}}>
          <CodeMirror
            value={getValue()}
            options={{
              mode: codeType,
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              lint: true,
              autoRefresh: true
            }}
            onBeforeChange={handleChange}
            ref={codeEdit}
            className="code-mirror"
          />
        </div>
        <div className="preview-window" style={{display: (selTab === "preview") ? "block" : "none"}}>
          <iframe
            srcDoc={srcDoc}
            title="preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  )
}

export default ViewProject;