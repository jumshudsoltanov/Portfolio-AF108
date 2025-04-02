let users = [
    { fullname: "Murad Aliyev", age: 25 },
    { fullname: "Elvin Mammadov", age: 33 },
    { fullname: "Aysel Hasanova", age: 32},
    { fullname: "Kamran Ibrahimov", age: 18 },
    { fullname: "Leyla Karimova", age: 16 }
];
;


for (i =0; i < users.length; i++) {
        let userAge = users[i]['age']
     if (userAge <= 30){
        console.log(userAge)
     }
    
}