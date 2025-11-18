import { useState } from 'react'


import Sidebar from '../layouts/Sidebar.jsx'
import Header from '../layouts/Header.jsx'
import Card from '../components/Card.jsx'
import CreditCard from '../components/CreditCard.jsx'

function Home() {
  var x = 0;
  //react hooks
  let [contador, setContador] = useState(10)
  let [arr, setArr] = useState([]);
  let clickButton = () => {
    setContador(++contador);
    console.log(contador);
    setArr([...arr, contador]);
  }
  return (
    <>
      <div className="d-flex">
        <Sidebar />

        <div className="content-area flex-grow-1">
          <Header />

          <div className="row g-4">
            <div className="col-md-4">
              <Card ammount={8475} tittle={"Main Balance"} percentage={"+5.2%"}/>
            </div>

            <div className="col-md-4">
              <CreditCard bank="Bankio" account="2984 5678 9838 3723" name="Aubrey Sabina" expiry="07/26"/>
            </div>

            <div className="col-md-4">
              <Card ammount={5200} tittle={"Total Income"} percentage={"+8.5%"}/>
            </div>

            <div className="col-md-4">
              <Card ammount={3750.90} tittle={"Total Expenses"} percentage={"-4.2%"}/>
            </div>
          </div>

          <div className="card-main mt-4">
            <h5 className="fw-bold mb-3">Recent Transfer Activity</h5>

            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Description</th>
                  <th>Account</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>

                <tr className="recent-transfer-row">
                  <td>Feb 5, 2025</td>
                  <td><img src="https://i.pravatar.cc/50?img=32" alt="Alex Johnson" /> Alex Johnson</td>
                  <td>Savings (***5678)</td>
                  <td>$500.00</td>
                </tr>

                <tr>
                  <td>Feb 4, 2025</td>
                  <td><i className="fa-brands fa-netflix me-2 text-danger"></i> Netflix Billing</td>
                  <td>Billing</td>
                  <td>$15.99</td>
                </tr>

                <tr className="recent-transfer-row">
                  <td>Feb 3, 2025</td>
                  <td><img src="https://i.pravatar.cc/50?img=14" alt="John Doe" /> John Doe</td>
                  <td>Savings (***9876)</td>
                  <td>$450.00</td>
                </tr>

              </tbody>
            </table>

          </div>

        </div>
      </div>

    </>
  )
}

export default Home
