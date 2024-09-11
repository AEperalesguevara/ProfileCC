import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Fondo con las imágenes en las esquinas */}
      <div className="background-img-top-left"></div>
      <div className="background-img-bottom-right"></div>

      {/* Tarjeta en el centro */}
      <ProfileCard />
    </div>
  );
}

export default App;
