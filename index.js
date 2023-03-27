

let data = 1
let data2 = "1"
console.log(data, typeof data)
console.log(data2,typeof data2 )


let data3 = data + parseInt(data2)
console.log(data3, typeof data3)


//Array

let data4 = ["one",2,true]
console.log(data4)
console.log(data4[2])

//object
let user = {
    name:"soo",
    faculty:"fkekk",
    phone:"0135678339"

}

console.log(user.faculty)

user = {
    name:"soo",
    faculty:"fkekk",
    phone:["0135678339","1234"]

}

console.log(user.phone[0])


user = {
    name:"soo",
    faculty:"fkekk",
    phone:{mobile : "0135678339",
    office:"1234"}

}

console.log(user.phone.mobile)