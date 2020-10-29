import React, { useState, useEffect } from 'react';

function ProjectFile(props){
  const {properties, style, tree, setTree, setCodeType} = props;
  
  const [children, setChildren] = useState([]);
  const [open, setOpen] = useState(false);
  
  const handleFileClick = () => {
    if(open){
      setOpen(false);
    }
    else{
      setOpen(true);
      /*switch(properties.title){
        case "HTML":
          setCodeType("xml");
          break;
        case "CSS":
          setCodeType("css");
          break;
        case "JS":
          setCodeType("js");
          break;
        default:
          break;
      }*/
    }
  }
  
  const getChildren = () => {
    if(open)
      return children.map(child => (
        <ProjectFile 
          properties={child} 
          style={{marginLeft: "1rem"}}
          tree={tree}
          setTree={setTree}
          setCodeType={setCodeType}
        />
      ));
  }
  
  useEffect(()=>{
    setChildren(properties.children);
    setOpen(properties.isOpen);
  }, [])
  
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