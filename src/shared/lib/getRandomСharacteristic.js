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
      return Math.floor(Math.random() * 100) < 70; // Здесь симуляция рандома в процентах: в 70% случаев падает true в остальных false
    case "profession":
      return professions[Math.floor(Math.random() * professions.length)];
    case "baggage":
      return baggage[Math.floor(Math.random() * baggage.length)];
    case "facts1":
      return facts1[Math.floor(Math.random() * facts1.length)];
    case "facts2":
      return facts2[Math.floor(Math.random() * facts2.length)];
    case "hobbies":
      return hobbies[Math.floor(Math.random() * hobbies.length)];
    case "phobias":
      return phobias[Math.floor(Math.random() * phobias.length)];
  }
};
