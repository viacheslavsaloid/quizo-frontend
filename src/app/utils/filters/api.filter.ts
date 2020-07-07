export const parseCrudFilter = (filter) =>
  Object.keys(filter)
    .filter((key) => filter[key])
    .map((key) => `${key}||$eq||${filter[key]}`)
    .join('&filter=');

export const getCrudFilter = (filter) => (filter ? `?filter=${parseCrudFilter(filter)}` : '');

export const parseFilter = (filter) =>
  Object.keys(filter)
    .filter((key) => filter[key])
    .map((key) => `${key}=${filter[key]}`)
    .join('&');

export const getFilter = (filter) => (filter ? `?${parseFilter(filter)}` : '');
