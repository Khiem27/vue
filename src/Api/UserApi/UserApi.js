import RequestClient from "../RequestClient";

const UserApi = {
    getAll: () => {
        const pathUrl = "Users.json"
        return RequestClient.get(pathUrl)
    },

    getOne: (id) => {
        const pathUrl = `/Users/${id}.json`
        return RequestClient.get(pathUrl)
    },

    add: (data) => {
        const pathUrl = "Users.json"
        return RequestClient.post(pathUrl, data)
    },
    
    update: (id, data) => {
        const pathUrl = `/Users/${id}.json`
        return RequestClient.put(pathUrl, data)
    }
}

export default UserApi;