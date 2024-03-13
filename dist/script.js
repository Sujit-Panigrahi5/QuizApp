// function counter() {
//     let count = 0;
//     console.log(count,`sujit${count}`)
//     return function xt () {
//       console.log(count++);
//     };
//   }
//   xt()

//   const c = counter();
//   c();
//   c();
//   c();

//   counter()
//   counter()
//   counter()

const quno = document.getElementById("quno");
const questiono = document.getElementById("qu");
const sumbit = document.getElementById("sumbit");

class Createaccount {
  name;
  email;
  password;


  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

// **************
// email validation 
// ***************

function isemailcorrect(email){
  let emailvalidataion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

   return email.match(emailvalidataion);
}

let map = new Map();  // map data structure has created here 

// **************
//  password check
// **************

// capital latter check 
function checkcapital(password){
  for(let i=0;i<password.length;i++){
    if(password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90){
      return true;
    }
    
  }
  return false;
}

// check the , is password contains number 
function checknumber(password){
  for(let i=0;i<password.length;i++){
    if(password[i]>=0){
      return true;
    }
  }
  return false;
}

// check , is password contains atlist one spacial character

function checkspacialchar(password){
  for(let i=0;i<password.length;i++){
    if(password[i] == "@" || password[i] == "$" || password[i] == "&" || password[i] == "_" || password[i] == "-"){
      return true;
    }
  }
  return false;
}

function checkpassword(password){
  if(password.length <8){
    console.log("length");
    return false;
  }

  if(!checkcapital(password)){
    console.log("upper case")
    return false;
  }

  if(!checknumber(password)){
    console.log("number ")
    return false;
  }

  if(!checkspacialchar(password)){
    console.log("spacialchar ")
    return false;
  }

  return true;

}

function createaccount() {
  document.getElementById("loginpage").style.display = "none";
  document.getElementById("createacc").style.display = "block";
  document.getElementById("createacc").style.display = "flex";
}

// *********************
// create a new account 
// **********************


let createacc = () => {

  
  
  // if first name and last name is empty 
  if(document.getElementById("firstname").value == "" ||document.getElementById("lastname").value == "" ){
      if(document.getElementById("firstname").value == "" && document.getElementById("lastname").value == ""){
        alert("Enter your first name and last name ");
      } else if(document.getElementById("firstname").value==""){
        alert("Enter your first name ");
      }else{
        alert("Enter your last name ");

      }
      return;
  }



  if (!document.getElementById("email").value) {  //if email is uncorrect
    alert("Enter a valid email id ");
    document.getElementById("email").value = "";
    return;
  }

  let passwordlen=document.getElementById("password").value;

  if(!checkpassword(passwordlen)){
    alert("Enter your valid password. Passwords should contain at least one uppercase character, one number, and one special character. ")
    document.getElementById("password").value="";
    return;
  }
 
  if (document.getElementById("check").checked != true) {
    alert("Please check the term and condition check box");
    document.getElementById("check").checked = false;
    return;
  }

  let firstneme = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let name = firstneme + "" + lastname;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let  newacc = new Createaccount(name, email, password);
  
  // map.set(email, newacc);
  let stringobj= JSON.stringify(newacc);
   localStorage.setItem(email,stringobj);
  document.getElementById("loginpage").style.display = "block";
  document.getElementById("createacc").style.display = "none";
  document.getElementById("loginpage").style.display = "flex";

  document.getElementById("firstname").value="";
  document.getElementById("lastname").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  document.getElementById("check").checked = false

}




function showpassword(){
 
 let passwordid=document.getElementById("password");
  if(passwordid.type==="password"){
    passwordid.type="text";
    document.getElementById("passwordtype").style.display="none";
    document.getElementById("texttype").style.display="block";
  } else{
    passwordid.type="password";
    document.getElementById("passwordtype").style.display="block";
    document.getElementById("texttype").style.display="none";
  }
}

// ****************
//  login
// ****************

function login(){
  let email=document.getElementById("email1").value;
  let password=document.getElementById("password1").value;
  if(!isemailcorrect(email)){
    alert("Enter a valid email ");
    document.getElementById("email1").value="";
    return;
  }


  
  const info=JSON.parse(localStorage.getItem(email));
  
  console.log(info);
  if(info.password === password){
    document.getElementById("middle").style.display="block";
    document.getElementById("loginpage").style.display="none"
  }else{
    
    document.getElementById("password1").value="";
    alert("Enter a valid password ");
    return;
  }

}







let questionans = new Array(10);

let question = [
    {
        quest: "Which of the following option leads to the portability and security of Java?",
        option0: "Bytecode is executed by JVM",
        option1: "The applet makes the Java code secure and portable",
        option2: "Use of exception handling",
        option3: "Dynamic binding between objects",
        ans: 0
    },
    {
        quest: "Which of the following is not a Java features?",
        option0: "Dynamic",
        option1: "Architecture Neutral",
        option2: "Use of pointers",
        option3: "Object-oriented",
        ans: 2
    },
    {
        quest: "The \u0021 article referred to as a",

        option0: "Unicode escape sequence",
        option1: "Octal escape",
        option2: "Hexadecimal",
        option3: "Line feed",
        ans: 0
    },
    {
        quest: "_____ is used to find and fix bugs in the Java programs.",
        option0: "JVM",
        option1: "JRE",
        option2: "JDK",
        option3: "JDB",
        ans: 3
    },
    {
        quest: "Which of the following is a valid declaration of a char?",
        option0: "char ch = '\ utea';",
        option1: "char ca = 'tea';",
        option2: "char cr = \u0223;",
        option3: "char cc = '\itea';",
        ans: 0
    },
    {
        quest: "What is the return type of the hashCode() method in the Object class?",
        option0: "Object",
        option1: "int",
        option2: "long",
        option3: "void",
        ans: 1
    },
    {
        quest: "Which of the following is a valid long literal?",
        option0: "ABH8097",
        option1: "L990023",
        option2: "904423",
        option3: "0xnf029L",
        ans: 3
    },
    {
        quest: " What does the expression float a = 35 / 0 return?",
        option0: "0",
        option1: "Not a Number ",
        option2: "Infinity",
        option3: "Run time exception ",
        ans: 2
    },
    {
        quest: "Evaluate the following Java expression, if x=3, y=5, and z=10:",
        option0: "24",
        option1: "23",
        option2: "20",
        option3: "25",
        ans: 3
    },
    {
        quest: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        option0: "javap tool",
        option1: "javaw command",
        option2: "Javadoc tool",
        option3: "javah command",
        ans: 2
    },

]
let store = [];

let questionno = 0;
let questincou = 1;
let score = 0;

function changethequestion() {

    questionno++;
    questincou++;

    if (questionno > 9) {
        alert("Thank you");
        document.getElementById("skip").style.display = "none";
        document.getElementById("scordcard").style.display = "block";
        document.getElementById("finalscord").textContent = score;
        document.getElementById("questionpage").style.display = "none";

        // score 
    } else {
        document.getElementById("back").style.display = "block";
        document.getElementById("quno").innerHTML = "";
        document.getElementById(`qu`).innerHTML = "";

        document.getElementById("quno").textContent = questionno + 1;
        document.getElementById(`qu`).textContent = question[questionno].quest;
        document.getElementById(`op0`).innerHTML = "";
        document.getElementById(`op0`).textContent = question[questionno].option0;

        document.getElementById(`op1`).innerHTML = "";
        document.getElementById(`op1`).textContent = question[questionno].option1;

        document.getElementById(`op2`).innerHTML = "";
        document.getElementById(`op2`).textContent = question[questionno].option2;

        document.getElementById(`op3`).innerHTML = "";
        document.getElementById(`op3`).textContent = question[questionno].option0;

        document.getElementById("questincount").innerHTML = "";
        document.getElementById("questincount").textContent = questincou;
    }

    for (let i = 0; i < 4; i++) {

        document.getElementById(`op${i}`).style.borderWidth = "1px";
        document.getElementById(`op${i}`).style.borderColor = "#646363";


    }





}

// back question
function backquestion() {
    questionno--;
    questincou--;
    if (questionno < 0) {

        document.getElementById("skip").style.display = "block";
        document.getElementById("sumbit").style.display = "none";
        document.getElementById("back").style.display = "none";
        // score 
    } else {
        document.getElementById("back").style.display = "block";
        document.getElementById("quno").innerHTML = "";
        document.getElementById(`qu`).innerHTML = "";

        document.getElementById("quno").textContent = questionno + 1;
        document.getElementById(`qu`).textContent = question[questionno].quest;
        document.getElementById(`op0`).innerHTML = "";
        document.getElementById(`op0`).textContent = question[questionno].option0;

        document.getElementById(`op1`).innerHTML = "";
        document.getElementById(`op1`).textContent = question[questionno].option1;

        document.getElementById(`op2`).innerHTML = "";
        document.getElementById(`op2`).textContent = question[questionno].option2;

        document.getElementById(`op3`).innerHTML = "";
        document.getElementById(`op3`).textContent = question[questionno].option0;

        document.getElementById("questincount").innerHTML = "";
        document.getElementById("questincount").textContent = questincou;
    }
}

// choose seciton
let chooseans = null;
let optinchose = (optionid, no) => {
    chooseans = no;
    sumbit.style.display = "block";
    for (let i = 0; i < 4; i++) {
        if (`op${i}` == optionid) {
            document.getElementById(`op${i}`).style.borderWidth = "2px";
            document.getElementById(`op${i}`).style.borderColor = "black";
        } else {
            document.getElementById(`op${i}`).style.borderWidth = "1px";
            document.getElementById(`op${i}`).style.borderColor = "#646363";
        }

    }
}

// skip section
function skipthisquestion() {
    sumbit.style.display = "none";
    chooseans = "";
    for (let i = 0; i < 4; i++) {
        document.getElementById(`op${i}`).style.borderWidth = "1px";
        document.getElementById(`op${i}`).style.borderColor = "#646363";
    }

    changethequestion();
}

let store1 = new Array(10);
// submit section 
function check() {
    if(chooseans!=null){
        if (chooseans == question[questionno].ans) {
            if (store1[questionno] != 1) {
                document.getElementById("questincount").innerHTML = "";
                document.getElementById("questincount").textContent = questincou;
    
                document.getElementById("score").innerHTML = "";
                document.getElementById("score").textContent = ++score;
    
                store.push(1);
                console.log(questionno);
    
                store1[questionno] = 1;
                console.log(store1[questionno]);
                // changethequestion();
            }
            changethequestion();
    
    
    
        } else {
            // if(store[questionno] !=0){
            //     document.getElementById("score").style.textContent=--score;
            // } 
    
            if (store1[questionno] == 1) {
    
                score--;
                document.getElementById("score").innerHTML = "";
                document.getElementById("score").innerText = score;
            }
    
            changethequestion();
        }
    } else{
        alert("please choose any option from below 4 option");
    }

    

    chooseans=null



}


function restart() {
    questionno = -1;
    questincou = 0;
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("scordcard").style.display = "none";
    document.getElementById("lastpage").style.display = "none";
    document.getElementById("questionpage").style.display = "block"
    changethequestion();
}
function finish() {
    document.getElementById("scordcard").style.display = "none";
    document.getElementById("lastpage").style.display = "block"
}





