import { useEffect,useState } from "react";
//import './App.css'

function App(){
    const [user, setUser] = useState(null);
    
  function getUser() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

    return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>Random User Generator</h1>

      {user && (
        <div>
          <img src={user.picture.large} alt="user" />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>{user.email}</p>
          <p>{user.location.country}</p>
         <p>{user.location.city}</p>

        </div>
      )}

      <button>Generate User</button>
    </div>
  );
}

export default App;