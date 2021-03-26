import './App.css';
import Video from './Video';
import video from './resources/production ID_4625522.mp4';
import dodge from './resources/production ID_4058084.mp4';

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url={video}
          channel='ibtidrahman'
          description='Soothing isnt it'
          song='Oddessa'
          likes={1203}
          shares={20}
          messages={121}
        />
        <Video
          url={dodge}
          channel='ibtidrahman'
          description='My Little game'
          song='kiddo'
          likes={1203}
          shares={20}
          messages={121}
        />
      </div>
    </div>
  );
}

export default App;
