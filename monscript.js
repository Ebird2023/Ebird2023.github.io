console.log("bonjour tout le monde")

var nom="william R"


var age = 13




direbonjour()

function direbonjour()  {
console.log("bonjour " +nom + "   tu    as   " +age +"  ans   ")
}



function anniversaire ()  {
    age= age + 1
}








function changerdenom() {
    if(nom=="willam R") {
        nom = "william L"
    } else{
        if(nom == "william L"){
            nom ="william R"
        }
    }
}


while(age< 100)  {
    anniversaire()
    direbonjour()
}