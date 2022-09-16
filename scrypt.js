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
   let calc = eval(document.getElementById("result").value);
   if (isNaN(calc)){
      return (document.getElementById("result").value = "0=");
   }else{
      document.getElementById("result").value = calc;
      return calc;
   }
}

/*
Функция вызывается когда пользователь нажимает на кнопку C
после нажатия в input записывается пустая срока
*/

function clearScreen(){
   document.getElementById('result').value = '';
}

/*
Функция вызывается когда пользователь нажимает на кнопку BackSpace
после нажатия из input удаляется символ
*/

function deleteSymbol() {
   var exp = document.getElementById("result").value;
   document.getElementById("result").value = exp.substring(0, exp.length - 1);
}