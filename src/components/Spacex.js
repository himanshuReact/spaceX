import React, { useState } from 'react'
import History from './History.js'
import Payloads from './Payloads.js'
import axios from '../Axios'
// import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { Router, Route, Link } from 'react-router'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchStuff, fetchStuffPayloads } from '../actions/'





function Spacex(props) {

  const [payloadData, setPayloadData] = useState("")
  const [historyData, setHistoryData] = useState("")

  return (
    <div>
      {/* <Link to="/payloads">
        <button onClick={() => getData("payloads")} className="btn">Payloads</button>
      </Link>
      <Link to="/history">
        <button onClick={() => getData("history")} className="btn">History</button>
      </Link> */}

      <Link to="/history">
        <button className="btn" onClick={() => props.fetchAction()}>History Display</button>
      </Link>
      <Link to="/payloads">
        <button className="btn" onClick={() => props.fetchActionPayloads()}>Payloads Display</button>
      </Link>

      {/* <button className="btn" onClick={() => props.fetchAction()}>History Display</button>

      <button className="btn" onClick={() => props.fetchActionPayloads()}>Payloads Display</button> */}

      {/* <button onClick={() => getData("history")} className="btn">History</button> */}
      {/* <Payloads result={payloadData} /> */}
      {/* <History result={historyData} /> */}
    </div >
  )
}

// const mapStateToProps = state => ({
//   isOn: state.counterReducer.isOn
// })

const mapDispatchToProps = (dispatch) => ({
  fetchAction: () => dispatch(fetchStuff),
  fetchActionPayloads: () => dispatch(fetchStuffPayloads)
})

export default connect(null, mapDispatchToProps)(Spacex)

