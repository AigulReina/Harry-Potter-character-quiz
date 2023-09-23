// Здесь будет функция получения объекта персонажа из API

import { Character } from "../domain/entity/Character";
import defaultImage from "../assets/img/default-image.jpg";

async function getCharacter() {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.textContent = ""; // Очищаем предыдущие ошибки


  try {
    //Получаем объект с объектами всех персонажей
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const result = await response.json();

    //Получаем случайное число от 1 до максимального количества персонажей в API)
    const number = Math.ceil(Math.random() * (result.length - 1));

    //Проверяем, чтобы по полученному числу вернулся существующий объект с персонажем
    if (result[number] === undefined)
      throw new Error("Character not found");

    //Получаем имя персонажа
    let name = result[number].name;

    //Проверяем, что получили персонажа
    if (name === "")
      throw new Error("Character not found");

    //Получаем изображение персонажа
    let image = result[number].image;

    //Проверяем, есть ли изображение, если нет, ставим дефолтное. Его мы импортировали в этот файл в начале как defaultImage, чтобы вебпак прописал к нему путь
    if (image === "")
      image = defaultImage;

      // Получаем год рождения персонажа и сразу проверяем, указан ли год рождения, если нет, ставим "A year long passed"
    let yearOfBirth = result[number].yearOfBirth || "A year long passed";

    // Получаем house персонажа
    let house = result[number].house;

    //Проверяем, есть ли house. Если нет, то 'Did not go to Hogwarts'
    if (house === "")
    house = 'Did not go to Hogwarts';
    
    //Получаем значение species
    let species = result[number].species;

    //Проверяем, указан ли species, если нет, то 'Some other unearthly creature'
    if (species === "")
    species = 'Some other unearthly creature';

    // Получаем ancestry персонажа
    let ancestry = result[number].ancestry;

    // если нет значения ancestry, то 'Who cares about that now anyways?'
    if (ancestry === "")
    ancestry = 'Who cares about that now anyways?';

      // Получаем, какой актер сыграл персонажа
      let actor = result[number].actor;

      // если не знаем, то 'Did not make it to the movies'
      if (actor === "")
      actor = 'Did not make it to the movies';

    //Эту строку уберём в конечной версии, сейчас она полезна
    console.log(result[number]);

    //Возвращаем объект персонажа с помощью класса, прописанного в domain/entity/Character.js и импортированного в начале. Если хотим добавить ему свойств, добавляем их в тот класс конструктор и сюда.
    return new Character(
      name,
      image,
      yearOfBirth,
      house,
      species,
      ancestry,
      actor
    );
  }
  catch (error) {
    //Выводим сообщение об ошибке на странице
    errorMessageElement.textContent = `Ошибка: ${error-message}`;
    // console.log("Ошибка!", error.message);
  }
}

export { getCharacter };