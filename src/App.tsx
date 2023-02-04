import "./styles/index.scss"
import {Route, Routes,Link} from "react-router-dom";
import {AboutPageAsynk} from "./Pages/AboutPage/AboutPage.asynk";
import {MainPageAsynk} from "./Pages/MainPage/MainPage.asynk";
import {Suspense} from "react";
import {useTheme} from "./Theme/useTheme";
import {classNames} from "./helpers/className/classNames";

const App = () => {
  const {theme, toggledTheme} = useTheme()
  return (
      <div className={classNames('app',{},[theme])}>
          <button onClick={toggledTheme}>Toggle</button>
          <Link to='/'>Главная</Link>
          <Link to='/about'>About</Link>
          <Suspense fallback={<div>Loading...</div>}>
             <Routes>
                <Route path={'/about'} element={<AboutPageAsynk/>}/>
                <Route path={'/'} element={<MainPageAsynk/>}/>
             </Routes>
          </Suspense>
      </div>
  )
}
export default App
