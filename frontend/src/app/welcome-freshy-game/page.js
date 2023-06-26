'use client'

import { 
    Image,
} from '@chakra-ui/react'
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityApp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/game/Build/Web_Game_Test.loader.js",
    dataUrl: "/game/Build/Web_Game_Test.data",
    frameworkUrl: "/game/Build/Web_Game_Test.framework.js",
    codeUrl: "/game/Build/Web_Game_Test.wasm",
  });

  return <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }}/>;
}

export default function Game() {
const path = '/asset/TemplateData/';

const favicon = path+'favicon.ico';
const unityLogoDark = path+'unity-logo-dark.png';
const progressBarEmptyDark = path+'progress-bar-empty-dark.png';

  return (
    <>
    <title>Game - Welcome Freshy - ICT21</title>
    <UnityApp/>
    <div className='unity-desktop' id="unity-container"  >
      <canvas className='bg-gray-900' id="unity-canvas" width='960' height='600' tabIndex="-1"></canvas>
      <div className='absolute hidden' id="unity-loading-bar">
        <Image width='40' height='32' src={unityLogoDark} className='' id="unity-logo" alt='unity Logo'></Image>
        <div id="unity-progress-bar-empty">
          <div id="unity-progress-bar-full"></div>
        </div>
      </div>
      <div id="unity-warning"> </div>
      <div id="unity-footer">
        <div id="unity-webgl-logo"></div>
        <div id="unity-fullscreen-button"></div>
        <div id="unity-build-title">MUICT Welcome Freshy! 2023 - Web Game</div>
      </div>
    </div>
    </>
  )
}
