
 let person = [];
 let selectedIndex = -1;

function addPerson() {
    let userName = document.getElementById("username").value;
    let surName = document.getElementById("surname").value;
    let date = document.getElementById("date").value;
    let select = document.getElementById("select").value;

    document.getElementById("username").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("select").value = "";

    let newCard = {
        name: userName,
        surname: surName,
        date: date,
        select: select,
    };

    if (selectedIndex >= 0){
        person[selectedIndex] = newCard;
        selectedIndex = -1;
    }else {
        person.push(newCard);
    }
    //funksiya kiritiladi
    drawTable();

}
function deleteTable(index) {
    person.splice(index, 1);
    //funksiya kiritiladi
    drawTable();

}

function drawTable() {
  let result = "";
  for (let i =0; i < person.length; i++){
      result    +=
          "<tr>" +
          "<td>"+ (i + 1) +"</td>" +
          "<td>"+ person[i].name +" " +person[i].surname +"</td>" +
          "<td>"+ person[i].date +"</td>" +
          "<td>"+ person[i].select +"</td>" +
          "<td class='d-flex justify-content-between'>" +
          "<button class='btn btn-primary' onclick='editTable("+ i +")'>Edit</button>" +  // edit funksiyasini chaqiraman
          "<button class='btn btn-danger' onclick='deleteTable("+ i +")'>Delete</button>" +  // delete funksiyasini chaqiraman
          "</td>" +
          "</tr>"
  }
  document.getElementById("result").innerHTML = result;
}
function editTable(index) {
    document.getElementById("username").value = person[index].name;
    document.getElementById("surname").value = person[index].surname;
    document.getElementById("date").value = person[index].date;
    document.getElementById("select").value = person[index].select;
    selectedIndex = index;
}
// let students = [];
// let selectedIndex = -1;
//
// function addStudent() {
//     let userName = document.getElementById("username").value;
//     let surName  = document.getElementById("surname").value;
//     let date     = document.getElementById("date").value;
//     let select   = document.getElementById("select").value;
//
//     document.getElementById("username").value = "";
//     document.getElementById("surname").value = "";
//     document.getElementById("date").value = "";
//     document.getElementById("select").value = "";
//
//     let newCard = {
//         name: userName,
//         surname: surName,
//         date: date,
//         select: select
//     };
//
//     if (selectedIndex >= 0){
//         students[selectedIndex] = newCard;
//         selectedIndex = -1;
//     } else {
//         students.push(newCard);
//     }
//     drawTable();
// }
//
// function deleteTable(index) {
//     students.splice(index, 1);
//     drawTable();
// }
//
// function drawTable() {
//     let result = "";
//
//     for (let i = 0; i < students.length; i++){
//         result +=
//             "<tr>" +
//             "<td>"+ (1 + i) +"</td>" +
//             "<td>"+ students[i].name + " " + students[i].surname +"</td>" +
//             "<td>"+ students[i].date +"</td>" +
//             "<td>"+ students[i].select +"</td>" +
//             "<td class='d-flex justify-content-between align-items-center'>" +
//             "<button type='button' class='btn btn-primary' onclick='editTable("+ i +")'>Edit</button>" +
//             "<button type='button' class='btn btn-danger' onclick='deleteTable("+ i +")'>Delete</button>" +
//             "</td>" +
//             "</tr>"
//     }
//     document.getElementById("result").innerHTML = result;
// }
//
// function editTable(index) {
//     document.getElementById("username").value = students[index].name;
//     document.getElementById("surname").value = students[index].surname;
//     document.getElementById("date").value = students[index].date;
//     document.getElementById("select").value = students[index].select;
//
//     selectedIndex = index;
// }