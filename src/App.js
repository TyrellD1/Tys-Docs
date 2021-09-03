import './App.scss';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import JournalEntries from './components/Journal-Entries/JournalEntries';
import CodeSnippet from './components/CodeSnippet';
import PageTitle from './components/PageTitle';
import Home from './components/Pages/Home';
import ReactPage from './components/Pages/Languages/React';
import {colors} from './UniversalValues';
import { navHeight } from './UniversalValues'
import {ReactComponent as NavLogo} from './svgs/book.svg';
import {ReactComponent as Paint} from './svgs/bucket.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const [navVisibility, setNavVisibility] = useState(`${navHeight}`)
  const [navToggleColor, setNavToggleColor] = useState("#442220")
  const [navToggled, setNavToggled] = useState(false)
  const [colorMode, setColorMode] = useState("pallete1")
  const [universalBackgroundColor, setUniversalBackgroundColor] = useState(colors.pallete1.backgroundColor)
  const [universalAccentColor, setUniversalAccentColor] = useState(colors.pallete1.accentColor)
  const [universalAccentHoverColor, setUniversalAccentHoverColor] = useState(colors.pallete1.accentHoverColor)
  const [universalHeaderColor, setUniversalHeaderColor] = useState(colors.pallete1.headerColor)
  const [universalParagraphColor, setUniversalParagraphColor] = useState(colors.pallete1.paragraphColor)
  const [universalOtherColor, setUniversalOtherColor] = useState(colors.pallete1.otherColor)
  const [universalOtherHoverColor, setUniversalOtherHoverColor] = useState(colors.pallete1.otherHoverColor)
  useEffect(()=>{
    setNavToggleColor(navToggled?universalBackgroundColor:universalAccentColor)
  }, [navToggled])
  const toggleNav = () => {
    setNavVisibility(navVisibility==="0"?`${navHeight}`:"0")
    setNavToggled(navToggled?false:true)
  }
  useEffect(()=>{
    if(colorMode==="pallete1") {
      setUniversalBackgroundColor(colors.pallete1.backgroundColor);
      setUniversalAccentColor(colors.pallete1.accentColor);
      setUniversalAccentHoverColor(colors.pallete1.accentHoverColor);
      setUniversalHeaderColor(colors.pallete1.headerColor);
      setUniversalParagraphColor(colors.pallete1.paragraphColor);
      setUniversalOtherColor(colors.pallete1.otherColor);
      setUniversalOtherHoverColor(colors.pallete1.otherHoverColor);
      setNavToggleColor(navToggled?colors.pallete1.backgroundColor:colors.pallete1.accentColor);
      document.getElementById("body").style.backgroundColor = colors.pallete1.backgroundColor
    } else if (colorMode==="pallete2") {
      setUniversalBackgroundColor(colors.pallete2.backgroundColor);
      setUniversalAccentColor(colors.pallete2.accentColor);
      setUniversalAccentHoverColor(colors.pallete2.accentHoverColor);
      setUniversalHeaderColor(colors.pallete2.headerColor);
      setUniversalParagraphColor(colors.pallete2.paragraphColor);
      setUniversalOtherColor(colors.pallete2.otherColor);
      setUniversalOtherHoverColor(colors.pallete2.otherHoverColor);
      setNavToggleColor(navToggled?colors.pallete2.backgroundColor:colors.pallete2.accentColor);
      document.getElementById("body").style.backgroundColor = colors.pallete2.backgroundColor
    } else if (colorMode==="pallete3") {
      setUniversalBackgroundColor(colors.pallete3.backgroundColor);
      setUniversalAccentColor(colors.pallete3.accentColor);
      setUniversalAccentHoverColor(colors.pallete3.accentHoverColor);
      setUniversalHeaderColor(colors.pallete3.headerColor);
      setUniversalParagraphColor(colors.pallete3.paragraphColor);
      setUniversalOtherColor(colors.pallete3.otherColor);
      setUniversalOtherHoverColor(colors.pallete3.otherHoverColor);
      setNavToggleColor(navToggled?colors.pallete3.backgroundColor:colors.pallete3.accentColor);
      document.getElementById("body").style.backgroundColor = colors.pallete3.backgroundColor
    } else if (colorMode==="pallete4") {
      setUniversalBackgroundColor(colors.pallete4.backgroundColor);
      setUniversalAccentColor(colors.pallete4.accentColor);
      setUniversalAccentHoverColor(colors.pallete4.accentHoverColor);
      setUniversalHeaderColor(colors.pallete4.headerColor);
      setUniversalParagraphColor(colors.pallete4.paragraphColor);
      setUniversalOtherColor(colors.pallete4.otherColor);
      setUniversalOtherHoverColor(colors.pallete4.otherHoverColor);
      setNavToggleColor(navToggled?colors.pallete4.backgroundColor:colors.pallete4.accentColor);
      document.getElementById("body").style.backgroundColor = colors.pallete4.backgroundColor
    }
    console.log(colorMode)
    console.log(colors)
  }, [colorMode])
  const toggleColorMode = () => {
    colorMode==="pallete1"?setColorMode("pallete2"):
    colorMode==="pallete2"?setColorMode("pallete3"):
    colorMode==="pallete3"?setColorMode("pallete4"):
    colorMode==="pallete4"?setColorMode("pallete1"):alert("No pallete")
  }
  return (
    <div className="App">
      <Router>
        <div style={{position: "fixed", top: `-${navVisibility}`, left:"0"}} className='fit-content master-navbar-container'>
          <Nav accentColor={universalAccentColor} accentHoverColor={universalAccentHoverColor} headerColor={universalHeaderColor} visibility={navVisibility} />
          <div onClick={()=>toggleNav()} style={{ cursor: "pointer", borderLeft: `2px solid ${universalAccentColor}`, borderBottom: `2px solid ${universalAccentColor}`, borderRight: `2px solid ${universalAccentColor}`, borderTop: `0 solid transparent`, padding: ".75%", width: "fit-content", height: "fit-content", position: "absolute", top: `100%`, right: "35px"}}>
            <NavLogo style={{position: "relative", width: "1.5vw", height: "auto", boxSizing: "content-box"}} fill={universalAccentColor} />      
          </div>
          <div onClick={()=>toggleColorMode()} style={{borderRadius: "50%", cursor: "pointer", border: `2px solid ${universalAccentColor}`, padding: "1%", width: "fit-content", height: "fit-content", position: "fixed", bottom: "10px", right: "10px"}}>
            <Paint style={{position: "relative", width: "3vw", height: "auto", boxSizing: "content-box"}} fill={universalAccentColor} />      
          </div>
        </div>  
        <Switch>
          <Route exact path="/"><Home headerColor={universalHeaderColor} /></Route>
          <Route path="/journal-entries">
            <JournalEntries headerColor={universalHeaderColor} otherColor={universalOtherColor} paragraphColor={universalParagraphColor} />
          </Route>
          <Route path="/react">
            <ReactPage headerColor={universalHeaderColor} otherColor={universalOtherColor} />        
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
