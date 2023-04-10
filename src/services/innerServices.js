import { instance } from "./api";

export async function sendUserData(requestData) {
    try {
        const { data } = await instance({
            method: 'POST',
            url: 'https://api.vikson-eng.com',
            data: JSON.stringify(requestData)
        });

        return data;
    } catch (e) {
        console.warn(e);
    }
}
