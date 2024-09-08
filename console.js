function Arrow(int, bool){
    let str = "";
    for(let i = 0; i < int; i++){
        str += "-"
    }
    if(bool){
        return str + ">"
    }
    return "<" + str
}
// console.log(Arrow(5,false)) // 1

function GetNums(){
    let max = 0;
    let counter = 0;
    let sum = 0;
    let fourth = 0;
    let input = 1;
    
    while(input != 0){

        input = prompt("enter a num")
        counter += 1;
        sum += input;

        if(input > max ){
            max = input;
        }

        if(counter === 4){
            fourth = input;
        }
    }
    let avareg = sum / counter;
    console.log(max)
    console.log(counter)
    console.log(sum)
    console.log(avareg)
    if(counter >= 4){
        console.log(fourth)
    }
    else{
        console.log(input)
    }
    
}
// GetNums()

function PrintStars(int){
    for (let i = 0; i < int + 1; i ++){
        console.log("*".repeat(i))
    }
}


function PrintStarsUpsite(int){
    for (let i = int ; i > -1 + 1; i --){
        console.log("*".repeat(i))
    }
}


function MullTable(int){
    for (let i = 1 ; i < int + 1; i ++){
        for (let j = 1 ; j < int + 1; j ++){
            console.log(`${i * j}`)
        }        
    }
}



function UpsitNumber(int){
    let stringNum = int.toString();
    return stringNum.split("").reverse().join("")
}

function Strings(str){
    if(str.length === 0){
        let newStr =  "";
    }
    else if(str.trim() === ""){
        let newStr = " ";
    }
    else{
        let newStr = str.trim();
    }  
    return newStr; 
}


const list1 = [1,2,3,4];
const list2 = [5,6,7,8];

function WirdFunc(list1, list2){
    const newList = [];
    let sumList2 = list2.reduce((acc, current) => acc + current, 0);
    let mullList1 = list1.reduce((acc, current) => acc * current, 1);
    let elemntValue = sumList2 * mullList1;
    for(let i = 0; i < list1.length; i++){
        newList[i] = elemntValue / list1[i]
    }
    return newList;
}


//PrintStars(5)
// PrintStarsUpsite(5)
//MullTable(5)
// console.log(UpsitNumber(100))
// console.log(Strings("     ubd dsljrng      "))
// console.log(WirdFunc(list1,list2))

///////////////////////////////////////////////////////////////////


function Fib(int){
    if(int === 0){
        return 0
    }
    if(int === 1){
        return 1
    }
    return Fib(int - 1) + Fib(int - 2)
}
console.log(Fib())