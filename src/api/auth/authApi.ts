import axios from "axios";
import {LoginInput} from "../../components/LoginModalForm";
import {User} from "../../store/types";
import $api from "../../core/axios";
import {RegisterInput} from "../../components/RegisterModalForm";

export interface ResponseApi {
    success: string,
    data: User
}

export const authApi = {
    async signIn(formData: LoginInput): Promise<ResponseApi> {
        const {data} = await axios.post<ResponseApi>('http://localhost:5555/auth/login', formData)
        return data
    },
    async signUp(formData: RegisterInput): Promise<ResponseApi> {
        const {data} = await axios.post<ResponseApi>('http://localhost:5555/auth/register', formData)
        return data
    },
    async getMe(): Promise<ResponseApi> {
        const {data} = await $api.get<ResponseApi>('http://localhost:5555/users/me')
        return data
    }
}