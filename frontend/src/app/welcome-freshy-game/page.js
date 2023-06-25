'use client'
import { 
    Image,
} from '@chakra-ui/react'
export default function Game() {
const path = '/asset/TemplateData/';

const favicon = path+'favicon.ico';
const unityLogoDark = path+'unity-logo-dark.png';
const progressBarEmptyDark = path+'progress-bar-empty-dark.png';

  return (
    <>
    <div className='' id="unity-container" class="unity-desktop" >
      <canvas className='bg-gray-900' id="unity-canvas" width='960' height='600' tabindex="-1"></canvas>
      <div className='absolute hidden' id="unity-loading-bar">
        <Image width='40' height='32' src={unityLogoDark} className='' id="unity-logo"></Image>
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
