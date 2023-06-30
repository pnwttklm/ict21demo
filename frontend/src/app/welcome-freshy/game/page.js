'use client'
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityApp() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/game/Build/Web_Game_Test.loader.js",
    dataUrl: "/game/Build/Web_Game_Test.data",
    frameworkUrl: "/game/Build/Web_Game_Test.framework.js",
    codeUrl: "/game/Build/Web_Game_Test.wasm",
  });

  return <Unity unityProvider={unityProvider} style={{ width: '100%', height: '200' }}/>;
}

export default function Game() {
  const path = '/asset/TemplateData/';

  const favicon = path+'favicon.ico';
  const unityLogoDark = path+'unity-logo-dark.png';
  const progressBarEmptyDark = path+'progress-bar-empty-dark.png';

  return (
    <>
    <title>Game - Welcome Freshy - ICT21</title>
    <div className='w-screen h-full flex flex-col items-center justify-center md:'>
      <UnityApp/>
      <h1 className='text-white font-semibold'>MUICT Welcome Freshy! 2023 - Web Game</h1>
    </div>
    </>
  )
}
