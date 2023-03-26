const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: `${API}/api/v1/auth/login`,
        profile: `${API}/api/v1/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/v1/products/${id}`,
        getProducts: (limit, offset) => `${API}/api/v1/products?limit=${limit}&offset=${offset}`,
        addProduct: () => `${API}/api/v1/products`,
        updateProduct: (id) => `${API}/api/v1/products/${id}`,
        deleteProduct: (id) => `${API}/api/v1/products/${id}`,
    },
    users: {
        getUser: (id) => `${API}/api/v1/users/${id}`,
        getUsers: () => `${API}/api/v1/users`,
        addUser: () => `${API}/api/v1/users`,
        updateUser: (id) => `${API}/api/v1/users/${id}`,
        deleteUser: (id) => `${API}/api/v1/users/${id}`,
    },
    categories: {
        getCategoriesList: () => `${API}/api/v1/categories`,
        addCategory: () => `${API}/api/v1/categories`,
        updateCategory: (id) => `${API}/api/v1/categories/${id}`,
        getCategoryItems: (id) => `${API}/api/v1/categories/${id}/products`,
    },
    files: {
        addImage: `${API}/api/v1/files/upload`
    }
}

export default endPoints;