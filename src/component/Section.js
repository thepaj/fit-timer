import Part from "./Part";
import Break from "./Break";

function Section({half}) {
    return (
      <div className="section">
        {half === 'first' ? 
            <div>
                <Break />
                <Part title={'First station'} />
                <Break />
                <Part title={'Second station'} />
                <Break />
                <Part title={'Third station'} />
                <Break />
                <Part title={'Fourth station'} />
            </div>
        :    <div>
                <Break />
                <Part title={'First station'} />
                <Break />
                <Part title={'Second station'} />
                <Break />
                <Part title={'Third station'} />
                <Break />
                <Part title={'Fourth station'} />
            </div>
        }
      </div>
    );
  }
  
export default Section;