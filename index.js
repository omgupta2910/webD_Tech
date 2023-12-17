//Performing a task
function greet(name,lastName){
   console.log("Hello " + name + ' '+ lastName);
}

greet('John','Smith');
greet('Om','Gupta');

function square(number){
   return number * number;
}

 
console.log(square(2));


//Comment!
       console.log("Hello World")

       //don't use var for decalring variable instead use

      //  const name = 'Mosh'; // string literal
       
       let person = {
         name: 'Mosh',
         age: 30
       };

       let selection = 'name';
       person[selection] = "Om"
      //  person.name = 'John';
      //  person['name'] = 'Mary';

       console.log(person.name);
       let colors = ['anme' , 12];
       colors[3] = 2;
      //  console.log(colors);


       // cannot be a reserved keyword
       // meaning full names 
       //cannot start with number
       // cannot conatin a space or hyphen
       //case-sensitive

    //    let firstName = "Mosh", lastName; //camel notation -> convention

       const interestRate = 0.3; //value cannot be changed further
    //    interestRate = 1;
      //    console.log(interestRate);


