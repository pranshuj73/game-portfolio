import type { NextPage } from 'next'

import { IoLogoPython, IoLogoJavascript, IoLogoReact, IoGitBranch } from 'react-icons/io5';
import { FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiLinux } from 'react-icons/si';


function HexIcon (props: JSX.ElementChildrenAttribute) {
  const badgeBg = '#3ff9dc';
  const iconColor = '#222';
  const shadowColor = '#ffee77';
  return (
    <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <span style={{color: badgeBg, fontSize: '60px', textShadow: `${shadowColor} 0 -2px 0, ${shadowColor} 0 2px 0, ${shadowColor} -2px 0 0, ${shadowColor} 2px 0 0, ${shadowColor} 0 0 7px`}}>&#x2B22;</span>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -25%)',color: iconColor}}>
        {props.children}
      </div>
    </div>
  )
}

const Skills: NextPage = () => {
  const iconSize = 20;
  return (
    <>
      <h2>Skills</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: '300px'}}>
        <HexIcon><IoLogoPython size={iconSize} /></HexIcon>
        <HexIcon><IoLogoJavascript size={iconSize} /></HexIcon>
        <HexIcon><IoLogoReact size={iconSize} /></HexIcon>
        <HexIcon><IoGitBranch size={iconSize} /></HexIcon>
        <HexIcon><FaDatabase size={iconSize} /></HexIcon>
        <HexIcon><SiDjango size={iconSize} /></HexIcon>
        <HexIcon><SiFlask size={iconSize} /></HexIcon>
        <HexIcon><SiLinux size={iconSize} /></HexIcon>
      </div>
      <hr />
      <p>In Progress: C++, Blockchain, Web3</p>
    </>
  )
}

export default Skills