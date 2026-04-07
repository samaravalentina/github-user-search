import axios from 'axios';

export async function getUser(username) {
    try {
        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        return response.data;
    } catch (error) {
     throw new Error("Usuário não encontrado");
    }
}