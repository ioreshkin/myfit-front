import axios from 'axios'

const config = {
    url: 'http://localhost:8888/upload'
}

const upload = (data, token) => {
    return axios.post(config.url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': 'Bearer ' + token
        }
    })
}

export default upload