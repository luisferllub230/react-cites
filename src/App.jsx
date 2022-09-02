import { useState, Fragment, useEffect} from 'react'
import Formulary from './components/Formulary'
import ShowCites from './components/ShowCites';


function App() {

  //localStorage
  let citesStorage = JSON.parse(localStorage.getItem('getCites'));

  !citesStorage? citesStorage = [] : null; 

  //useState
  const [getCites, setAllCites] = useState(citesStorage);

  //useEffect
  useEffect(()=>{
    console.log('here');
    if(citesStorage){
      localStorage.setItem('getCites', JSON.stringify(getCites));
    }else{
      localStorage.setItem('getCites', JSON.stringify([]));
    }
  }, [getCites]); 

  //get cites
  const getAllCites = cites => setAllCites([...getCites, cites])

  //delete cites
  const deleteOneCites = id => {
    setAllCites(getCites.filter(c => c.id !== id))
  };

  const citesTotal = getCites.length <= 0 ? 'NO APPOINTMENTS' : 'ALL CITES'; 

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
            <div className='col-12 mb-5 text-white'>
                <h1>{citesTotal}</h1>
            </div>
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
