import { useState, Fragment } from 'react'
import Formulary from './components/Formulary'
import ShowCites from './components/ShowCites';


function App() {

  //useState
  const [getCites, setAllCites] = useState([]);

  //get cites
  const getAllCites = cites => setAllCites([...getCites, cites])

  //delete cites
  const deleteOneCites = id => {
    setAllCites(getCites.filter(c => c.id !== id))
  };


  return (
    <Fragment>
      <div className="App container">
        <div className="row mt-5 text-center d-flex  justify-contend-center">
          <div className="col-12 col-md-6">
            <Formulary
              getAllCites={getAllCites}
            />
          </div>
          <div className="col-12 col-md-6">
            {getCites.map(c => (
              <ShowCites
                key={c.id}
                showCites={c}
                deleteOneCites={deleteOneCites}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
