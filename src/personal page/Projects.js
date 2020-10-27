import React, { useState, useEffect } from 'react';
import Item from './Item.js';
import EditProject from './EditProject.js';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width, height};
}

function Projects({date, viewProj, setViewProj}){
  const [list, setList] = useState([]);
  const [winDim, setWinDim] = useState(getWindowDimensions());
  const [showPopUp, setShowPopUp] = useState(false);
  const [item, setItem] = useState({});
  const [onBtn, setOnBtn] = useState(false);
  const [color, setColor] = useState("rgb(0,130,130)");
  
  const num = 8;
  const pad = 15; // actual padding is sqrt(2)*pad
  const startOpac = 300;
  const d = 300;
  const l = (d/2)*Math.sqrt(2);
  const top = 100;
  const listWidth = (num+1)*l + (num-1)*pad;
  
  const dims = {winDim: winDim, num: num, pad: pad, startOpac: startOpac, d: d, l: l, top: top, listWidth: listWidth};
  
  const [x,setX] = useState(winDim.width/2 - listWidth/2);
  const [v,setV] = useState(0);
  const [a,setA] = useState(0);
    
  const openPopUp = (index) => {
    setShowPopUp(true);
    setItem(list[index]);
  }
  
  const editItem = (newItem) => {
    setList([...list.slice(0, newItem.index), newItem, ...list.slice(newItem.index + 1)]);
  }
  
  const handleMouseOver = (side) => {
    setOnBtn(true);
    if(side === "left") setA(0.1);
    else setA(-0.1);
  }
  
  const handleMouseOut = (side) => {
    setOnBtn(false);
    setA(0);
  }
  
  useEffect(() => {
    let curX = 0;
    let curY = top;
    let ret = [];
    
    for(let i=0; i<num; i++){
      if(i !== 0){
        curX += l + pad;
        if(curY === top) curY += l + pad;
        else curY -= l + pad;
      }
      else curX += l-(d/2);
      ret.push({
        x: curX, 
        y: curY, 
        key: Math.random() * 100, 
        index: i,
        empty: true,
        imgUrl: null,
        textColor: null,
        text: null
      });
    }
    
    let listValues = JSON.parse(localStorage.getItem('list'));  // get items
    let newList = ret;
    if(listValues !== null) 
    if(listValues.length === num)
    {
      for(let i=0; i<ret.length; i++){
        newList[i].empty = listValues[i].empty;
        newList[i].imgUrl = listValues[i].imgUrl;
        newList[i].text = listValues[i].text;
        newList[i].textColor = listValues[i].textColor;
      }
    }
            
    setList(newList);
  }, []);
  
  useEffect(() => { // set items
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  
  return(
    <div className="proj-strip">
      <button onMouseEnter={() => handleMouseOver("left")} onMouseLeave={() => handleMouseOut("left")} className="scrl-btn left-scrl-btn">
        <i className="fas fa-angle-left"></i>
      </button>
      {
        list.map(item => (
          <Item 
            x={x} setX={setX}
            v={v} setV={setV}
            a={a} setA={setA}
            item={item} 
            setItem={setItem}
            list={list}
            openPopUp={openPopUp} 
            dims={dims}
            date={date}
            key={item.key} 
            onBtn={onBtn}
            color={color}
            viewProj={viewProj} 
            setViewProj={setViewProj}
          />
        ))
      }  
      <button onMouseEnter={() => handleMouseOver("right")} onMouseLeave={() => handleMouseOut("right")} className="scrl-btn right-scrl-btn">
        <i className="fas fa-angle-right"></i>
      </button>
      <EditProject setShowPopUp={setShowPopUp} showPopUp={showPopUp} editItem={editItem} item={item}/>
    </div>
  )
}

export default Projects;