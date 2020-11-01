import React, { useState, useEffect } from 'react';

function ProjectFile(props){
  const {
    properties, 
    style,
    codeType,
    setFirst,
    setCodeType,
    curFile,
    setCurFile
  } = props;
  
  const [children, setChildren] = useState([]);
  const [open, setOpen] = useState(false);
  
  const handleFileClick = (e) => {
    e.preventDefault();
    if(open){
      if(properties.folder === true)
        setOpen(false);
    }
    else{
      setOpen(true);
      if(properties.folder === false){
        if(curFile !== properties.key || curFile === null){
          setCurFile(properties.key);
        }
        switch(properties.title){
          case "HTML":
            if(codeType !== "xml")
              setFirst(true);
              setCodeType("xml");
            break;
          case "CSS":
            if(codeType !== "css")
              setFirst(true);
              setCodeType("css");
            break;
          case "JS":
            if(codeType !== "js")
              setFirst(true);
              setCodeType("javascript");
            break;
        }
      }
    }
  }
  
  const getChildren = () => {
    if(open)
      return children.map(child => (
        <ProjectFile 
          properties={child} 
          style={{marginLeft: "1rem"}}
          codeType={codeType}
          setFirst={setFirst}
          setCodeType={setCodeType}
          key={child.key}
          curFile={curFile}
          setCurFile={setCurFile}
        />
      ));
  }
  
  useEffect(()=>{
    setChildren(properties.children);
    setOpen(properties.isOpen);
  }, [])
  
  useEffect(()=>{
    //console.log(properties.key,curFile,properties.folder);
    if(properties.key !== curFile && open && properties.folder === false)
      setOpen(false);
  }, [curFile])
  
  return(
    <div className="ProjectFile" style={style}>
      <button className="project-file-btn" onClick={handleFileClick} style={{color: open ? "rgb(200,150,255)" : "white", marginLeft: (children.length !== 0) ? "0" : "1rem"}}>
        <i className={"fas fa-angle-" + (open ? "down" : "right")} style={{display: (children.length !== 0) ? "inline" : "none"}}></i>
        {properties.title}
      </button>
      {getChildren()}
    </div>
  )
}

export default ProjectFile;