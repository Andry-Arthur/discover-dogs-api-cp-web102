import { useEffect, useState } from 'react'
import './App.css'
import MainCard from './components/MainCard'
import HistorySidebar from './components/History-sidebar'
import BanlistSidebar from './components/Banlist-sidebar'

function App() {
  const [dog, setDog] = useState({});
  const API_KEY = 'live_o5lDyweHVdDL9NKkleBnxGHR1tItayPr0uwZYxGQhhHhWlUClrkBWBKm9RPAbNgK';
  // Fetch dog data from API
  const fetchDogAPI = async () => {
    const imgResponse = await fetch('https://api.thedogapi.com/v1/images/search' + `?api-key=${API_KEY}`+'&has_breeds=1&limit=1');
    const imgData = await imgResponse.json();
    // console.log(imgData[0].id);
    // const breedResponse = await fetch('https://api.thedogapi.com/v1/images/' + `${imgData[0].id}` + `?x-api-key=${API_KEY}` );
    // const breedData = await breedResponse.json();
    // console.log(breedData[0]);
    return imgData[0];
  };
  const [history, setHistory] = useState([]);

  const onDiscover = async () => {
    if (Object.keys(dog).length > 0) {
      setHistory([...history, dog]);
    }
    console.log(history);
    const data = await fetchDogAPI();
    setDog(data);
  }

  return (
    <>
      <h1>Veni Vici: Discover Dogs🐶</h1>
      <div className="main-container">
        <h4>Discover the Human's bestfriend, in all shapes and sizes 🐕🐕‍🦺🐩.</h4>
        {Object.keys(dog).length > 0 && <MainCard object={dog} />}
        <button onClick={onDiscover}>Discover 🔀</button>
      </div>
      <HistorySidebar items={history} />
      <BanlistSidebar tags={[]} />
    </>
  )
}

export default App