import './App.css';
import { useState } from 'react';
import img from './pngwing.com.png'
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(false);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setLoading(true);
    setUserdata(data.data);
  }
  return (
    <div>
      <div className='navbar-box'>
        <div className='navbar'>
          <img src={img} alt="empty" className='image'/>
          <div className='get-data-button' onClick={getData}>Get Users</div>
        </div>
      </div>
      {loading ? <div className='user-box-container'>
        {userdata.map((item) => (
          <div className='user-box' key={item.id}>
            <div className='user-image-box'><img src={item.avatar} alt='missing' className='user-image'/></div>
            <div className='user-data'>
              <div className='user-name'>{item.first_name} {item.last_name}</div>
              <div className='user-email'>{item.email}</div>
            </div>
          </div>
        ))}
        </div> : <div className='loading'><ClipLoader /></div>}
    </div>
  );
}

export default App;
