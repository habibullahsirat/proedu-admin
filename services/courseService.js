import axios from "axios";

const API = "/api/courses";

export async function getCourses() {
  const { data } = await axios.get(API);
  return data.data;
}

export async function getCourse(id) {
  const { data } = await axios.get(`${API}/${id}`);
  return data.data;
}

export async function createCourse(values) {
  const { data } = await axios.post(API, values);
  return data;
}

export async function updateCourse(id, values) {
  const { data } = await axios.patch(`${API}/${id}`, values);
  return data;
}

export async function deleteCourse(id) {
  const { data } = await axios.delete(`${API}/${id}`);
  return data;
}
