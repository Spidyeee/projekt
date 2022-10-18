var id = 2;

function dodajStudenta() {
    var imie = document.getElementById("student_imie").value;
    var nazwisko = document.getElementById("student_nazwisko").value;
    var uczelnia = document.getElementById("student_uczelnia").value;
    var akademik = document.getElementById("student_akademik").value;
    var telefon = document.getElementById("student_telefon").value;
    var aktywny = document.getElementById("student_aktywny").checked;

    var table = document.getElementById("student_table");

    table.innerHTML += '<tr><td>'+(id++)+'</td><td>'+imie+'</td><td>'+nazwisko+'</td><td>'+uczelnia+'</td><td>'+akademik+'</td><td>'+telefon+'</td><td>'+aktywny+'</td></tr>';
}