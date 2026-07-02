import axios from "axios";

const API = "/api/hero";

export async function getHeroes() {
  const { data } = await axios.get(API);
  return data.data;
}

export async function getHero(id) {
  const { data } = await axios.get(`${API}/${id}`);
  return data.data;
}

export async function createHero(values) {
  const { data } = await axios.post(API, values);
  return data;
}

export async function updateHero(id, values) {
  const { data } = await axios.patch(`${API}/${id}`, values);
  return data;
}

export async function deleteHero(id) {
  const { data } = await axios.delete(`${API}/${id}`);
  return data;
}
