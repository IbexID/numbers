# Задача по программированию.
### Написать следующий метод. На вход приходит массив чисел.
> [41, 55, 61, 1, 8, 27, 37 , 39]

Необходимо осортировать его по возрастанию. Например так:
>[1, 8, 27, 37 , 39, 41, 55, 61]

Далее берется первое число, ищутся все числа, в которых есть хоть одна цифра из этого числа. Такие числа удаляются. И исходное число тоже есть совпадения.
>[8, 27, 37 , 39, 55]

Далее снова. 8 ни  с чем не совпадает - берется слеующее число.
>[8, 27, 37 , 39, 55]

После проверки числа 27 уберутся 27 и 37.
>[8, 39, 55]

Дальнейшие проверки уже не изменят массив.

ВЫВОД В КОНСОЛЬ текущего массива [8, 39, 55].
Проверка, имеет ли смысл продолжать. Остановка происходит в одно их 3 случаев:
- если в массиве всего одно число осталось
- если в массиве ни одного чилса не осталось
- если размер массива в этом этапе не изменился.
Если условие останова выполнено, то возвращаем массив. Если нет, то далее следующее:

Затем необходимо отобразить все числа в обратном порядке цифр.
>[8, 93, 55]

Затем возвести все числа в квадрат.
>[64, 8649, 3025].

Далее с этим массивом происходит то же самое.
Сортировка: 
>[64, 3025, 8649]

Поиск совпадений: 
>[3025]

Вывод в консоль: 
>[3025]

Проверка на остановку: останавливаемся и возвращаем.
>[3025]