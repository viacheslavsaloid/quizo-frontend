const getNestedValue = (value, nestedFields) => nestedFields.reduce((pre, cur) => pre[cur], value);

export const filterData = ({ data, filter = {}, match = false }) =>
  data.filter((value) =>
    Object.keys(filter).every((key) => {
      const [parentField, ...nestedFields] = key.split('.');

      const nestedValue = getNestedValue(value[parentField], nestedFields);

      const nestedKey = 'id';

      const filterValue = filter[key].toLowerCase();

      const isString = typeof nestedValue === 'string';

      const dataValue = isString ? nestedValue.toLowerCase() : nestedValue[nestedKey].toLowerCase();

      return match ? dataValue === filterValue : dataValue.includes(filterValue) || filterValue.includes(dataValue);
    })
  );
