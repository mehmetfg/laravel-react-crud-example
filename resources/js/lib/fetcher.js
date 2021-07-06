import axios from "axios";

export const fetcher = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json"
    }
})
