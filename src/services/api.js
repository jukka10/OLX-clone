import axios from "axios";

const api = axios.create({
  baseURL: "http://alunos.b7web.com.br:501"
});

api.defaults.headers.post[("Content-Type", "Accept")] = "application/json";

export default api;
