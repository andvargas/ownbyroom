import './App.css';
import { Route } from 'react-router-dom';

import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      

      
      <header className="App-header">
        <Route path="/" exact component={Register} />
        <Route path="/thankyou" render={() => <h1>Thank you for registering with us!</h1>} />
      </header>
      <div>
        <h2>How it works</h2>
        <ol>
          <li>Buddy up with the number of people you would like to live in a house.</li>
          <li>Find a suitable house on ownbyroom.com or any other property websites like Rightmove.co.uk</li>
          <li>(optional) OwnByRoom as an investor will jump in to pay for the common area part of the house in exchange for a transparent (fixed) management fee (investment yield) based on the invested amount.</li>
          <li>Draw up a shared ownership agreement (in legal terms a deed of trust) which sets down what stake each of the parties own, deposit funds, contribution to the common areas, exit strategy and house rules.</li>
          <li>Apply for the mortgage with your co-owner buddies.</li>
          <li>Move in and enjoy the company of likeminded individuals sharing the costs of owning a house.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
