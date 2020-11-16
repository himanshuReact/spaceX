// export const add = () => ({
//   type: 'ADD'
// })

// export const subtract = () => ({
//   type: 'SUBTRACT'
// })

import axios from '../Axios'

export const fetchStuff = async (dispatch, state) => {
  dispatch({ type: 'LOADING_DATA' })
  let request = await axios.get(`/history`)
  let result = request.data
  setTimeout(() => {
    dispatch({ type: 'DATA_SUCCESS', payload: result })
  }, 100)
}



export const fetchStuffPayloads = async (dispatch, state) => {
  dispatch({ type: 'LOADING_DATA' })
  let request = await axios.get(`/payloads`)
  let result = request.data
  setTimeout(() => {
    dispatch({ type: 'DATA_SUCCESS', payload: result })
  }, 100)
}










// async function fetchData() {
//   let request = await axios.get(`/${param}`)
//   let result = request.data
//   if (param === "payloads") {
//     setPayloadData(result)
//     console.log("the request data  is", param)
//     console.log("the request result  is", result)
//   } else {
//     setHistoryData(result)
//     console.log("the request data  is", param)
//     console.log("the request result  is", result)
//   }


// }
// fetchData()