import * as crud from "./crudService";

const endpoint = "/courses";

export const getCourses = () => crud.getAll(endpoint);

export const getCourse = (id) => crud.getOne(endpoint, id);

export const createCourse = (payload) => crud.create(endpoint, payload);

export const updateCourse = (id, payload) => crud.update(endpoint, id, payload);

export const deleteCourse = (id) => crud.remove(endpoint, id);
