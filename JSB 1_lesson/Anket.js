var surname = prompt('Введите Вашу фамилию:');
var name = prompt('Введите Ваше имя:');
var patronymic = prompt('Введите Ваше отчество:');

do {
	var age = Number(prompt('Введите Ваш возраст в годах:'));
} while (isNaN(age));

console.log(surname, name, patronymic, age);