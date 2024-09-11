import './App.css'
import TargetCont from './components/targetCont'
import WelcomeCont from './components/WelcomeCont'
import CurrentWeek from './components/CurrentWeek'
import WeekCont from './components/WeekCont'



function App() {
  return (
    <>
      <div className="row">

         {/* LEFT CONTAINER */}
         <div className="col-xs-12 col-md-8" id='left-container'>

          <WelcomeCont/>
          <TargetCont week={4} weekAverage = {62} weekTarget = {61}/>
          <CurrentWeek/>
          <WeekCont/>
          
          
         </div>

         <div className="col-xs-6 col-md-4" id='right-container'>
        </div>
      </div>
    </>
  )
}

export default App;
