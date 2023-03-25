const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
    auth: {
        login: `${API}/api/v1/auth/login`,
        profile: `${API}/api/v1/products`,
    },
    products: {
        getProduct: (id) => `${API}/api/v1/products/${id}`,
    }
}

export default endPoints;