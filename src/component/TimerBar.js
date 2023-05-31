import Part from "./Part";
import Section from "./Section";


function TimerBar() {
    return (
      <div className="timer-bar">
        <Part title={'Warm Up'}/>
        <Section half={'first'} />
        <Section half={'second'} />
        <Part title={'Challenge'} />
        <Part title={'Cardio'} />
        <Part title={'Cooldown'} />
      </div>
    );
  }
  
export default TimerBar;