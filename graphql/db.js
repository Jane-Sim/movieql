export const people = [
  {
    id: "0",
    name: "Seyoung",
    age: 29,
    gender: "female",
  },
  {
    id: "1",
    name: "Seyoung2",
    age: 29,
    gender: "female",
  },
  { id: "2", name: "Seyoung3", age: 29, gender: "female" },
  { id: "3", name: "Seyoung4", age: 29, gender: "female" },
  { id: "4", name: "Seyoung5", age: 29, gender: "female" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
