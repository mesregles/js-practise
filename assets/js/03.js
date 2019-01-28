/*Основы JavaScript->Переменные*/
var message;
message = 'Hello';
console.log(message);

// Кратко
var massage = 'Hello';

// ОбЪявить несколько переменных сразу
var user ='John', age=25, message ='Hello';
console.log(user,age,message);

//При обЪявление другой переменной старая переменная автоматически удаляется.
var message;
message = 'Hello!';
message = 'World!';//Поменяли, а то значение привет - удалилось.
console.log( message ); 

//Имена переменных.
var myName;
var test123;

//ОбЪявление переменных.
var $ = 1; // объявили переменную с именем '$'
var _ = 2; // переменная с именем '_'
console.log( $ + _ ); 

//Неправельное обЪявление переменных.
// var 1a; // начало не может быть цифрой.
// var my-name; // дефис '-' не является разрешенным символом.

//Можно использовать русские буквы.
var имя = "Вася";
console.log( имя ); // "Вася"

//Константы.
//Константа – это переменная, которая никогда не меняется. Как правило, их называют большими буквами, через подчёркивание. Например:
var COLOR_RED = "#F00";
var COLOR_GREEN = "#0F0";
var COLOR_BLUE = "#00F";
var COLOR_ORANGE = "#FF7F00";

var color = COLOR_ORANGE;
console.log( color ); // #FF7F00

//ЗАДАЧИ.
var name, admin;
name ='Василий';
admin = name;
console.log(admin);

