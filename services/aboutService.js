import axios from "axios";

const API = "/api/about";

export async function getAbouts() {
  const { data } = await axios.get(API);

  return data.data;
}

export async function getAbout(id) {
  const { data } = await axios.get(`${API}/${id}`);

  return data.data;
}

export async function createAbout(values) {
  const { data } = await axios.post(API, values);

  return data;
}

export async function updateAbout(id, values) {
  const { data } = await axios.patch(`${API}/${id}`, values);

  return data;
}

export async function deleteAbout(id) {
  const { data } = await axios.delete(`${API}/${id}`);

  return data;
}
