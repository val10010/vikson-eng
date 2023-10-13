import { instance } from "./api";

export async function sendUserData(requestData) {
    try {
        const { data } = await instance({
            method: 'POST',
            url: '/api/viksonForm',
            data: requestData
        });

        return data;
    } catch (e) {
        console.warn(e);
    }
}
