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

  class Createaccount {
    name=null;
    email=null;
    password=null;
     

    constructor(name , email, password){
      this.name=name;
      this.email=email;
      this.password=password;
    }
  }

  let map = new Map();

  function createaccount(){
      document.getElementById("loginpage").style.display="none";
      document.getElementById("createacc").style.display="block";
      document.getElementById("createacc").style.display="flex";
  }

  let createacc=()=>{
    let firstneme=document.getElementById("firstname").value;
    let lastname = document.getElementById("secondname").value;
    let name=firstneme+""+lastname;
    let email = document.getElementById("email").value;
    let emailvalidataion= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if(!email.match(emailvalidataion)){  //if email is uncorrect
      alert("Enter a valid email id ");
      document.getElementById("email").innerHTML="";
      return;
    }
    let password = document.getElementById("password").value;

    let newacc=new Createaccount(name,email,password);
    map.set(email,newacc);

    localStorage.setItem(map);
  }

  

