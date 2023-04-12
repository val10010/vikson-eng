import { instance } from "./api";

export async function sendUserData(requestData) {
    try {
        const { data } = await instance({
            method: 'POST',
            url: process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://api-vikson-eng.herokuapp.com/',
            data: requestData
        });

        return data;
    } catch (e) {
        console.warn(e);
    }
}
