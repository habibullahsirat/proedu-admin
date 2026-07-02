import api from "@/lib/admin/api";

export async function getAll(endpoint) {
  const { data } = await api.get(endpoint);
  return data.data;
}

export async function getOne(endpoint, id) {
  const { data } = await api.get(`${endpoint}/${id}`);
  return data.data;
}

export async function create(endpoint, payload) {
  const { data } = await api.post(endpoint, payload);
  return data.data;
}

export async function update(endpoint, id, payload) {
  const { data } = await api.patch(`${endpoint}/${id}`, payload);
  return data.data;
}

export async function remove(endpoint, id) {
  const { data } = await api.delete(`${endpoint}/${id}`);
  return data;
}
