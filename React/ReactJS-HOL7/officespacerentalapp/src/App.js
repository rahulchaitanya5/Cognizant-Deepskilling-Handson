import './App.css';

function App() {

  const officeSpaces = [

    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "office.jpg"
    },

    {
      Name: "Regus",
      Rent: 65000,
      Address: "Hyderabad",
      Image: "office.jpg"
    },

    {
      Name: "WeWork",
      Rent: 75000,
      Address: "Bangalore",
      Image: "office.jpg"
    }

  ];

  return (

    <div style={{ marginLeft: "100px" }}>

      <h1>Office Space , at Affordable Range</h1>

      {
        officeSpaces.map((item, index) => {

          const rentColor = {
            color: item.Rent < 60000 ? "red" : "green"
          };

          return (

            <div key={index}>

              <img
                src={item.Image}
                width="25%"
                height="25%"
                alt="Office Space"
              />

              <h1>Name: {item.Name}</h1>

              <h3 style={rentColor}>
                Rent Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

              <br />

            </div>

          );

        })
      }

    </div>

  );

}

export default App;