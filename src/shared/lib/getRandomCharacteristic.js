import {
  professions,
  baggage,
  facts1,
  facts2,
  hobbies,
  phobias,
} from "../model";

const maxAge = 80;
const minAge = 18;

export const getRandomCharacteristic = (type) => {
  switch (type) {
    case "age":
      return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
    case "sex":
      return Math.floor(Math.random() * 10) % 2 === 0 ? "Ж" : "М";
    case "fertility":
      return Math.floor(Math.random() * 100) < 70;
    case "profession":
      return professions[Math.floor(Math.random() * professions.length)];
    case "baggage":
      return baggage[Math.floor(Math.random() * baggage.length)];
    case "fact1":
      return facts1[Math.floor(Math.random() * facts1.length)];
    case "fact2":
      return facts2[Math.floor(Math.random() * facts2.length)];
    case "hobby":
      return hobbies[Math.floor(Math.random() * hobbies.length)];
    case "phobia":
      return phobias[Math.floor(Math.random() * phobias.length)];
    default:
      return;
  }
};
