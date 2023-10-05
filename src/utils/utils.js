//Divide el json de memes en 4 arrays por cada propiedad

export function splitByProperties(data) {
  const property = {};

  for (const element of data) {
    for (const key in element) {
      if (element.hasOwnProperty(key)) {
        if (!property[key]) {
          property[key] = [];
        }
        property[key].push(element[key]);
      }
    }
  }

  property["name"] = Array(data.length).fill('');

  return property;
}