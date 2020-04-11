import axios from 'axios'

export default() => {
    const token = localStorage.getItem('access_token')
    return axios.create({
        baseURL: `https://localhost:44317/`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'0',
            'Authorization': `Bearer ${token}`
        }
    })
}