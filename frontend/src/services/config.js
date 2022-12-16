const API_REST = process.env.REACT_APP_API_KEY

export const getApiUrl = path => `http://localhost:8000/api${path}`