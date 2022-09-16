// Функция принимает значения,выбранные как параметр и возвражает в ibput
function display(val){
   document.getElementById('result').value += val;
   return val;
}

/*
Функция вызывается когда User кликает по кнопке "=".
Переменная х принимаетматематическое выражение, предоставленное пользователем.
Это выражение вычисляетсляется и сохраняется в переменной y
результат выводится в input.
*/

function solve() {
   let x = document.getElementById('result').value;
   let y = eval(x);
   document.getElementById('result').value = y;
   return y;
}

/*
Функция вызывается когда пользователь нажимает на кнопку C
после нажатия в input записывается пустая срока
*/

function clearScreen(){
   document.getElementById('result').value = '';
}




