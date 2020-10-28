import React, { useEffect, useRef, useState } from 'react';
import {draw} from './Canvas.js';

function Item({ item, setItem, viewProj, setViewProj, x, setX, v, setV, a, setA, dims, list, openPopUp, date, onBtn, color }){
  const [imgData, setImgData] = useState(null);
  const firstUpdate = useRef(true);
  const canvasRef = useRef(null);
  const allInItem = useRef(null);
    
  const plusBtnHandler = () => {
    openPopUp(item.index);
  }
  
  const handleEditBtn = (e) => {
    openPopUp(item.index);
  }
  
  const isPlusBtnShown = () => {
    if(!item.empty) return {display: "none"};
  }
  
  const handleClickItem = () => {
    if(viewProj === false){
      setViewProj(true);
    }
  }

  useEffect(() => {
    let canvas = canvasRef.current;
    let context = canvas.getContext('2d');
    
    let pos = (item.x+x)+dims.d/2;
    
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    else if(pos > dims.winDim.width-dims.startOpac-dims.l/2){
      let a = (pos-(dims.winDim.width-dims.startOpac)-1.5*dims.l)/(-2*dims.l);
      /*if(imgData !== null){
        if(item.y === dims.top)
          draw(context, imgData, 2*dims.l, false, true, a);
        else
          draw(context, imgData, 2*dims.l, false, false, a);
      }*/ // Opacity Maker
      if(allInItem.current !== null){
        if(a>0) allInItem.current.style.opacity = a;
        else allInItem.current.style.opacity = 0;
      }
      if(item.x+x > dims.winDim.width/2+dims.listWidth/2) {
        console.log("here");
        let next = item;
        next.x = item.x-dims.listWidth+dims.l-dims.pad;
        setItem(next);
      }
    }
    else if(pos < dims.startOpac+dims.l/2){
      let a = (pos-dims.startOpac+1.5*dims.l)/(2*dims.l);
      /*if(imgData !== null){
        if(item.y === dims.top)
          draw(context, imgData, 2*dims.l, true, true, a);
        else
          draw(context, imgData, 2*dims.l, true, false, a);
      }*/ // Opacity Maker
      if(allInItem.current !== null){
        if(a>0) allInItem.current.style.opacity = a;
        else allInItem.current.style.opacity = 0;
      }
      if(item.x+x < dims.winDim.width/2-dims.listWidth/2) {
        console.log("here");
        let next = item;
        next.x = item.x+dims.listWidth-dims.l+dims.pad;
        setItem(next);
      }
    }
        
    if(v !== 0 && !onBtn) {
      setA(a=>-v/40);
      if(v<0.2 && v>-0.2){ 
        setV(0);
        setA(0);
      }
    }
    
    if((v<=5 || a<=0) && (v>=-5 || a>=0)) setV(v=>v+a);
    setX(x=>x+v);
  }, [date])
  
  useEffect(() => {
    let canvas = canvasRef.current;
    let context = canvas.getContext('2d');
    
    if(item.imgUrl === null){
      context.fillStyle = color;
      context.fillRect(0,0,2*dims.l,2*dims.l);
      setImgData(context.getImageData(0,0,2*dims.l,2*dims.l));
    }
    else
    {
      let img = new Image();
      img.onload = () => {
        img.crossOrigin = "Anonymous";
        context.drawImage(img,0,0);
        setImgData(context.getImageData(0,0,2*dims.l,2*dims.l));
      }
      img.src = item.imgUrl;
    }
  }, [list])

  return(
    <div className="item" style={{top: item.y, left: x+item.x, width: dims.d, height: dims.d}}>
      <canvas id="canvas" ref={canvasRef} width={2*dims.l} height={2*dims.l}>
      </canvas>
      
      <div className="all-in-item" ref={allInItem}>
        <button className="edit-proj-btn" onClick={handleEditBtn} style={{color: "rgb("+item.textColor+")",display: item.empty ? "none" : "inline-block"}}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        
        <div className="in-item">
          <button onClick={plusBtnHandler} style={isPlusBtnShown()} className="plus-btn">
            <i className="fas fa-plus"></i>
          </button>
          
          <button className="proj-text" onClick={handleClickItem} style={{color: "rgb("+item.textColor+")", display: item.empty ? "none" : "block"}}>{item.text}</button>
        </div>
      </div>
    </div>
  )
}

export default Item;