import http from './http'

export const getProducts = () => http.get('/products/list')
