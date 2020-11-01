import React, { useState, useEffect, useHistory } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './App.css';
import './styles/proj-strip.css';
import './styles/project.css';
import './styles/edit-window.css';
import './styles/SeeCV.css';
import Profile from './images/LinkedIn1.jpeg';
import Projects from './personal page/Projects.js';
import ProfileEditor from './personal page/ProfileEditor.js';
import AboutEditor from './personal page/AboutEditor.js';
import ViewProject from './personal page/Project Viewer/ViewProject.js';
import SeeCV from './SeeCV.js';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width, height};
}

function App({date}) {
  const [linkDescription, setLinkDescription] = useState("");
  const [aboutTxtShowAll, setAboutTxtShowAll] = useState(false);
  const [onProfileEditor, setOnProfileEditor] = useState(false);
  const [winDim, setWinDim] = useState(getWindowDimensions());
  const [profile, setProfile] = useState({name: "Eitan Wander", occupation: "Software Engineer", email: "ethanwander@gmail.com"});
  const [onAboutEditor, setOnAboutEditor] = useState(false);
  const [aboutTxt, setAboutTxt] = useState("Experienced Software Developer with a thorough knowledge in the following coding languages: C#, Java, Python, JavaScript, HTML, CSS and React. Currently studying for my Bachelor’s Degree in Mathematics and Physics at the University of Bar Ilan (1 year to graduation). Highly motivated, passionate about technology, a self-learner with a proactive and a hands on approach. Looking for a part time Software Development job.");
  const [viewProj, setViewProj] = useState(false);
  const [viewCV, setViewCV] = useState(false);
  //const history = useHistory();

  const aboutTxtLim = 300;
  
  const hoverLinkBtn = (type) => {
    switch(type){
      case "email":
        setLinkDescription("Click this link to copy my email address to your clipboard");
        break;
      case "linkedin":
        setLinkDescription("Click this link to return to my LinkedIn page");
        break;
      case "github":
        setLinkDescription("Click this link to view the code for this website");
        break;
      default:
        break;
    }
  }
  
  const handleClickLink = (e, type) => {
    e.preventDefault();
    switch(type){
      case "linkedin":
        window.location.assign("https://www.linkedin.com/in/eitan-wander-5744281b8/");
        break;
      case "github":
        window.location.assign("https://github.com/EthanWander/Portal-public-view-2.0/tree/master");
        break;
      default:
        break;
    }
  }
  
  const handleEditProfBtn = (e) => {
    e.preventDefault();
    setOnProfileEditor(true);
  }
  
  const handleEditAboutBtn = (e) => {
    e.preventDefault();
    setOnAboutEditor(true);
  }
  
  const handleSeeCVBtn = (e) => {
    e.preventDefault();
    setViewCV(true);
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
    let locProfile = JSON.parse(localStorage.getItem('profile'));
    let locAboutTxt = JSON.parse(localStorage.getItem('about'));
    if(locProfile !== null) setProfile(locProfile);
    if(locAboutTxt !== null) setAboutTxt(locAboutTxt);
  }, []);
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
  }, [profile]);
  useEffect(() => {
    localStorage.setItem('about', JSON.stringify(aboutTxt));
  }, [aboutTxt]);
  
  
  
  return (
    <div className="App">
      <div className="links">
        <CopyToClipboard text="ethanwander@gmail.com">
          <button onMouseOver={() => hoverLinkBtn("email")}><i className="fas fa-at"></i></button>
        </CopyToClipboard>
        <button onClick={(e) => handleClickLink(e, "linkedin")} onMouseOver={() => hoverLinkBtn("linkedin")}><i className="fab fa-linkedin"></i></button>
        <button onClick={(e) => handleClickLink(e, "github")} onMouseOver={() => hoverLinkBtn("github")}><i className="fab fa-github"></i></button>
        <div className="link-description">
          {linkDescription}
        </div>
      </div>
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
        <button className="see-cv-btn" onClick={handleSeeCVBtn}>See C.V.</button>
      </div>
      
      <AboutEditor 
        onAboutEditor={onAboutEditor}
        setOnAboutEditor={setOnAboutEditor}
        aboutTxt={aboutTxt}
        setAboutTxt={setAboutTxt}
      />
      
      <SeeCV
        viewCV={viewCV}
        setViewCV={setViewCV}
        winDim={winDim}
      />
      
      <ViewProject  
        viewProj={viewProj} 
        setViewProj={setViewProj} 
      />
      
      <Projects 
        date={date} 
        winDim={winDim} 
        viewProj={viewProj} 
        setViewProj={setViewProj}
      />
    </div>
  );
}

export default App;
