/*Основы JavaScript->Шесть типов данных, typeof*/

//Число 
var n = 123;
n = 12.345;

//NAN - ОШИБКА
//INFINITY - БЕСКОНЕЧНОСТЬ

//STRING.
var str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';

//Булевый (логический) тип «boolean».
var checked = true; // поле формы помечено галочкой
checked = false;    // поле формы не содержит галочки
console.log(checked);

//Нулевое значение.
var age = null;

// Специальное значение «undefined» неприсвоено.
var x = 123;
x = undefined;

//Объекты «object»
var user = { name: "Вася" };

// Оператор typeof
typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof {} // "object"
typeof null // "object"  (1)
typeof function(){} // "function"  (2)