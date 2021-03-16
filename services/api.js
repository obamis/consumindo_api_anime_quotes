import axios from 'axios';

const api = axios.create({
    baseURL: 'https://animechan.vercel.app/api/',
});

const quotes = (anime_quote) => {
    const { anime, character: personagem, quote } = anime_quote
    return ` \nAnime: ${anime} \nPersonagem: ${personagem} \nFrase: ${quote}\n`
}

export { api, quotes };