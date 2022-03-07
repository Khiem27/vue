import RequestClient from "../RequestClient";

const ProductApi = {
    getAll: () => {
        const pathUrl = "Products.json"
        return RequestClient.get(pathUrl)
    },

    getOne: (id) => {
        const pathUrl = `Products/${id}.json`
        return RequestClient.get(pathUrl)
    }
}

export default ProductApi;