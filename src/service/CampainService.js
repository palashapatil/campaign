import axios from 'axios'

const mockURL="http://localhost:8080/campaings/createCampaing"

const __createCampaign = (data) =>{
    return axios.post(mockURL, data)
}

export {
    __createCampaign
}