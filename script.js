"use strict";

const username = prompt("Введіть свій username");
const password = prompt("Введіть свій пароль");

const adminUsername = "admin";
const adminPassword = "admin1234";

if (username === adminUsername && password === adminPassword) {
  alert("Вітаємо Адмін!");
} else {
  alert("Невірні дані для входу!");
}
