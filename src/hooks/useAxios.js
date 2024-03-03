import { useEffect } from "react"
import { useAuth } from "./useAuth"
import { api } from '../api';
import axios from "axios";
const useAxios = () => {
    const { auth, setAuth } = useAuth()
    useEffect(() => {
        //Add request interceptor
        const requestInterceptor = api.interceptors.request.use((config) => {
            const authToken = auth?.authToken;
            if (authToken) {
                config.headers.Authorization = `Bearer ${authToken}`
            }
            return config
        }, (error) => Promise.reject(error))
        // Add response interceptor
        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
                            { refreshToken });
                        const { token } = response.data;

                        console.log(`New token:${token}`)
                        setAuth({ ...auth, authToken: token })
                        originalRequest.headers.Authorization = `Bearer ${token}`;

                        return axios(originalRequest)

                    } catch (error) {
                        throw error
                    }

                }
                return Promise.reject(error)
            }
        )
        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor)
        }
    }, [auth.authToken])
    return { api };
}

export default useAxios