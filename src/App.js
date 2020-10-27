import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/proj-strip.css';
import './styles/project.css';
import './styles/edit-window.css';
import Profile from './images/LinkedIn1.jpeg';
import Projects from './personal page/Projects.js';
import ProfileEditor from './personal page/ProfileEditor.js';
import AboutEditor from './personal page/AboutEditor.js';
import ViewProject from './personal page/ViewProject.js';

function App({date}) {
  const [aboutTxtShowAll, setAboutTxtShowAll] = useState(false);
  const [onProfileEditor, setOnProfileEditor] = useState(false);
  const [profile, setProfile] = useState({name: "Eitan Wander", occupation: "Software Engineer", email: "ethanwander@gmail.com"});
  const [onAboutEditor, setOnAboutEditor] = useState(false);
  const [aboutTxt, setAboutTxt] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptatem porro rerum neque magni, est, esse impedit reprehenderit enim maxime odio debitis laboriosam, magnam dolorem praesentium harum minima! Consequuntur, quam, quo? Nobis, dolores commodi. Perferendis atque soluta nemo, modi ut, dignissimos porro assumenda illum ea quo quae nam rerum sint, mollitia aperiam, asperiores consequatur. Debitis iusto unde omnis, dolore nesciunt? Rem qui consequuntur natus, beatae quia, temporibus cum sunt, autem quasi, voluptatum fugit debitis sequi saepe nisi nesciunt aperiam quis?");
  const [viewProj, setViewProj] = useState(false);

  const aboutTxtLim = 300;
  
  const handleEditProfBtn = (e) => {
    e.preventDefault();
    setOnProfileEditor(true);
  }
  
  const handleEditAboutBtn = (e) => {
    e.preventDefault();
    setOnAboutEditor(true);
  }
  
  const getAboutTxt = () => {
    if(aboutTxtShowAll === false) 
      return aboutTxt.substring(0,aboutTxtLim)+"...";
    return aboutTxt;
  }
  
  const handleReadMoreClick = () => {
    if(aboutTxtShowAll) setAboutTxtShowAll(false);
    else setAboutTxtShowAll(true);
  }
  
  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem('profile')));
    setAboutTxt(JSON.parse(localStorage.getItem('about')));
  }, []);
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);
  useEffect(() => {
    localStorage.setItem('about', JSON.stringify(aboutTxt));
  }, [aboutTxt]);
  
  
  
  return (
    <div className="App">
      <div className="profile-strip">
        <div className="profile">
          <img className="profile-img" alt="profile" src={Profile}/>
          <h1>{profile.name}</h1>
          <p>{profile.occupation}</p>
          <p>{profile.email}</p>
        </div>
        <div className="contact-btns">
          {/*<button className="follow-btn">follow</button>
          <button className="message-btn">message</button>*/}
          <button className="edit-profile-btn" onClick={handleEditProfBtn}>edit <i className="fas fa-pencil-alt"></i></button>
        </div>
      </div>
      
      <ProfileEditor setProfile={setProfile} profile={profile} onProfileEditor={onProfileEditor} setOnProfileEditor={setOnProfileEditor} />
      
      <div className="about-strip">
        <div className="about">
          <div className="about-header">
            <h1>About</h1>
            <button className="edit-about-btn" onClick={handleEditAboutBtn}><i className="fas fa-pencil-alt"></i></button>
          </div>
          <p>
            {getAboutTxt()}
            <button className="read-more-btn" onClick={handleReadMoreClick}>
              read {aboutTxtShowAll ? "less" : "more"}
            </button>
          </p>
        </div>
        <button className="see-cv-btn">See C.V.</button>
      </div>
      
      <AboutEditor 
        onAboutEditor={onAboutEditor}
        setOnAboutEditor={setOnAboutEditor}
        aboutTxt={aboutTxt}
        setAboutTxt={setAboutTxt}
      />
      
      <ViewProject  viewProj={viewProj} setViewProj={setViewProj} />
      
      <Projects date={date} viewProj={viewProj} setViewProj={setViewProj}/>
    </div>
  );
}

export default App;
