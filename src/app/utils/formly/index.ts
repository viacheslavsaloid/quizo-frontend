export const isField = (field) => field || typeof field === 'string';
export const isEmptyString = (field) => typeof field === 'string' && field.length === 0;
export const getLabelByKey = (key: string) =>
  key
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();
