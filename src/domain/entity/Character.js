// Здесь будет класс персонажа, содержащий в себе всю информацию, полученную из API

class Character {
  #name;
  #image;
  #yearOfBirth;
  #house;
  #species;
  #ancestry;
  #actor;

  //В конструктор добавляем все свойства объекта, которые хотим выводит в результатах. Также добавляем их выше с # и ниже в геттеры
  constructor(name, image, yearOfBirth, house, species, ancestry, actor) {
    this.#name = name;
    this.#image = image;
    this.#yearOfBirth = yearOfBirth;
    this.#house = house;
    this.#species = species;
    this.#ancestry = ancestry;
    this.#actor = actor;
  }

  get name() {
    return this.#name;
  }
  get image() {
    return this.#image;
  }
  get yearOfBirth() {
    return this.#yearOfBirth;
  }
  get house() {
    return this.#house;
  }
  get species() {
    return this.#species;
  }
  get ancestry() {
    return this.#ancestry;
  }
  get actor() {
    return this.#actor;
  }
}
export { Character };