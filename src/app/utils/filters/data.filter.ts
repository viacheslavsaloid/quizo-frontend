const getNestedValue = (value, nestedFields) => nestedFields.reduce((pre, cur) => pre[cur], value);

export const filterData = ({ data, filter = {} }) =>
  data.filter((value) =>
    Object.keys(filter).every((key) => {
      const [parentField, ...nestedFields] = key.split('.');

      const nestedValue = getNestedValue(value[parentField], nestedFields);

      const nestedKey = 'id';
      return nestedValue === filter[key] || nestedValue[nestedKey] === filter[key];
    })
  );
