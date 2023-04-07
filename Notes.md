# Перечисление массивов:

const array1 = ['value1', 'value2']

{array1.map((value) => (

))}

const array2 = {
'key1': 'value1',
'key2': 'value2',
}

{Object.entries(array2).map(([key, value]) => (

))}

======

тернарные (сокращенные) символы:

! - "логическое отрицание (не)"
|| или ?? - "логическое ИЛИ"
&& - "логическое И"

autoplay == 1 ? true : false

тоже самое, что и:

if (autoplay == 1) {
return true
} else {
return false
}

======

if (value) {
value exist
}

в шаблоне:

{something && (
<>something exist</>
)}

=======

if (!value) {
value not exist
}

в шаблоне:

{!something && (
<>something not exist</>
)}

или так:

{something ?? 'something not exist'}

=======

# Популярные виды ошибок сервера:
403 - доступ запрещен
404 - запрошенная страница не найдена
500 - сервер упал :(