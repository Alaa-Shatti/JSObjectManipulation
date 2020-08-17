const obj = {
  name: "Alaa",
  surname: "ŞATTİ",
  age: 29,
};
console.log({ ...obj, name: "ali", student: false });
console.log(obj);

let obj2 = {
  name: "Alaa",
  surname: "ŞATTİ",
  age: 29,
};

obj2 = {
  ...obj2,
  age: 25,
};
console.log(obj2);

const updateObjects = (obj, key, value, callback) => {
  const result = { ...obj, [key]: value };
  callback(result);
};

updateObjects(obj, "name", "ali", (result) => {
  console.log(result);
});

updateObjects(obj, "age", 25, (result) => {
  console.log(result);
});
