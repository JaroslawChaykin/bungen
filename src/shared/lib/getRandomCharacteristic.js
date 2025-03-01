import {
  baggage,
  facts1,
  facts2,
  health,
  hobbies,
  phobias,
  professions,
} from "../model";

const MAX_AGE = 80;
const MIN_AGE = 18;

export const getRandomCharacteristic = (type) => {
  switch (type) {
    case "age":
      return Math.floor(Math.random() * (MAX_AGE - MIN_AGE + 1) + MIN_AGE);
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
    case "health":
      return health[Math.floor(Math.random() * health.length)];
    default:
      return;
  }
};
