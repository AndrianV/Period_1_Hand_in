function genericFunc<T>(argument: T): T[] {    
    let arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
  }
  
  const arrayFromString = genericFunc<string>("String");
  console.log(arrayFromString[0]);
  console.log(typeof arrayFromString[0]);
  
  const arrayFromNumber = genericFunc(33);
  console.log(arrayFromNumber[0]);
  console.log(typeof arrayFromNumber[0]);