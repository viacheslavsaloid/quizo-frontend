export const parseCrudFilter = (filter) =>
  Object.keys(filter)
    .map((key) => `${key}||$eq||${filter[key]}`)
    .join('&filter=');

export const getCrudFilter = (filter) => (filter ? `?filter=${parseCrudFilter(filter)}` : '');

export const parseFilter = (filter) =>
  Object.keys(filter)
    .map((key) => `${key}=${filter[key]}`)
    .join('&');

export const getFilter = (filter) => (filter ? `?${parseFilter(filter)}` : '');
