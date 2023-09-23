//Здесь будет класс InfoBox, на основе которого будет отрисовываться div-рамка с инофрмацией о персонаже
import "./styles.scss";

class InfoBox {

  constructor(name, yearOfBirth, house, species, ancestry, actor) {
    //Сразу в конструкторе создаём див-обёртку и присваем ему класс со стилями. 
    this.wrapper = document.createElement("div");
    this.wrapper.className = "result";

    //Если хотим добавить информацию, выводимую в рамке, добавляем её как аргумент здесь в конструктор
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.house = house;
    this.species = species;
    this.ancestry = ancestry;
    this.actor = actor;
  }
  render() {
    this.wrapper.innerHTML = "";

    const title = document.createElement("h1");
    title.className = "result__title";
    title.textContent = this.name;

    const infoList = document.createElement("ul");
    infoList.className = "result__info";

    // Добавляем элементы с дополнительной информацией
    this.addInfoItem(infoList, "Year of birth:", this.yearOfBirth);
    this.addInfoItem(infoList, "House:", this.house);
    this.addInfoItem(infoList, "Species:", this.species);
    this.addInfoItem(infoList, "Ancestry:", this.ancestry);
    this.addInfoItem(infoList, "Actor:", this.actor);

    this.wrapper.appendChild(title);
    this.wrapper.appendChild(infoList);

    return this.wrapper;
  }

  addInfoItem(container, label, value) {
    const item = document.createElement("li");
    item.textContent = `${label} ${value}`;
    container.appendChild(item);
  }
}

export { InfoBox };














//   Версия Юли
//   render() {
//     //Очищаем наполнение при каждом новом запуске рендера
//     this.wrapper.innerHTML = "";

//     //Создаём элемент с именем персонажа со стилями
//     const title = document.createElement("h1");
//     title.className = "result__title";
//     title.appendChild(new Text(this.name));

//     //Добавляем созданные элементы в див-обёртку
//     this.wrapper.appendChild(title);

//     return this.wrapper;
//   }
// }

// export { InfoBox };