# Yohoho.cc KP Player Extension
Yohoho.cc popup-плеер для Kinopoisk 

## Дисклеймер
#### Я не являюсь разработчиком оригинального плеера, я всего-лишь сделал удобный инструмент для ознакомления с новинками кино. Я против пиратства и копирования чего-либо!

## Установка
В репозитории находится сервер и расширение

1. [Скачайте](https://github.com/MARIO60333/yohoho_kp_extension/archive/refs/heads/main.zip) архив и распакуйте в удобное место
2. Если у вас Chrome: зайдите в `chrome://extensions/` > включите `Режим разработчика` > выбираете `Загрузить распакованное расширение` > выбираете папку `extension`. Если Яндекс: откройте `Настройки` > `Дополнения` > перенесите `extension/Yohoho.cc kinopoisk Player.crx` во вкладку
3. Запустите сервер, находящийся в `server/yohoho_localserv.exe`
4. Заходим на `kinopoisk.ru`(не `hd.kinopoisk.ru`) и ищем интересующий фильм/сериал. Справа по центру будет зеленая кнопочка, жмем ее.
5. PROFIT!

## Сборка сервера
Для сборки необходимо иметь установленный `Node.js >= 16.14.2` и `pkg >= 5.6.0`

1. Устанавливаем `pkg`
```
$ npm i -g pkg
```
2. Переходим в директорию, где находится исходный код сервера
3. Запускаем `pkg`
```
$ pkg .
```
