import { api, quotes } from "./services/api.js"

api.get('random')
    .then((response) => (console.log(quotes(response.data))))
    .catch((err) => { console.error('Erro : ' + err) })