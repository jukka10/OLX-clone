import api from "../services/api";

export async function Authentication(email, password, token) {
  const response = await api.post("/user/signin", {
    email,
    password
  });

  if (response.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return response.data;
}

export async function Register(name, state, email, password) {
  const { data } = await api.post("/user/signup", {
    name,
    state,
    email,
    password
  });
  return data;
}

export async function getLocs() {
  const { data } = await api.get("/states");

  return data.states;
}
export async function getCategory() {
  const { data } = await api.get("/categories");

  return data.categories;
}

export async function getAds(options) {
  const { data } = await api.get("/ad/list", options);

  return data.ads;
}

export async function getAd(id, other = false) {
  const { data } = await api.get(`/ad/item/`, { params: { id, other } });

  return data;
}

export async function NewAd(formData) {
  const { data } = await api.post("ad/add", formData);

  return data;
}
