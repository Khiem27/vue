import RequestClient from '../RequestClient'

const BlogsApi = {
    getAll: () => {
        const pathUrl = "Blogs.json"
        return RequestClient.get(pathUrl)
    },

    getOne: (id) => {
        const pathUrl = `Blogs/${id}.json`
        return RequestClient.get(pathUrl)
    }
}

export default BlogsApi;