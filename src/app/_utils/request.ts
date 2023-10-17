import { baseURL, currentURL } from "./config"
import axios, { InternalAxiosRequestConfig } from "axios"

export const request = axios.create({
    baseURL,
    withCredentials: true,
})

export const api = axios.create({
    baseURL: currentURL,
    withCredentials: true,
})

interface InternalAxiosRequestConfigContext extends InternalAxiosRequestConfig {
    context?: any
    sub?: string
}

interface InternalAxiosRequestConfigToken extends InternalAxiosRequestConfig {
    token?: string
}
