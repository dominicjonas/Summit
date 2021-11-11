import axios from 'axios'

export const getAllExerciseWeightInfo = async () => {
  const options = {
    method: 'GET',
    url: `http://localhost:8000/user/api`
  }

  const { data } = await axios.request(options)

  return data
}

export const addSessionWeight = (sessionWeight) => {
  return axios.post(`http://localhost:8000/user/userlog`, sessionWeight)
}
