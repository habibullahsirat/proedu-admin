import axios from "axios";

const API = "/api/courses";

export async function getCourses() {
  try {
    const { data } = await axios.get(API);
    return data.data;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

export async function getCourse(id) {
  try {
    const { data } = await axios.get(`${API}/${id}`);
    return data.data;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

export async function createCourse(values) {
  try {
    const { data } = await axios.post(API, values);
    return data;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

export async function updateCourse(id, values) {
  try {
    const { data } = await axios.patch(`${API}/${id}`, values);
    return data;
  } catch (err) {
    console.error(err);

    throw err;
  }
}

export async function deleteCourse(id) {
  try {
    const { data } = await axios.delete(`${API}/${id}`);
    return data;
  } catch (err) {
    console.error(err);

    throw err;
  }
}
