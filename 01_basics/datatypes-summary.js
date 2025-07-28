// Primitive

// 7 types: - String, Number, Boolean, null (empty), undefined, Symbol, BigInt

// JS is dynamically typed language or is statically typed language?

    
    const score = 100
    const scoreValue = 100.3

    const IsLoggedIn = false
    const outsideTemp = null

    let userEmail;   //undefined

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.group(id === anotherId);

    //const bigNumber = 12114645545645456565n //bignumber

    //Arrays

    const heros = ["shaktiman", "naagraj", "doga"];
    let myObj = {
        name: "akshay",
        age: 35,
    }

    //Function

    const myFunction = function() {
        console.log("Hello World");
        
    }

    console.log(typeof anotherId);

    



// Refrence Type:- (Non-prmitive)
    // Array, Objects, Functions


    // ************************Memories***************************

    //Stack & Heap

    //Stack(Primitive), Heap(Non-Primitive)

    let myYoutubename = "akshaysaode"

    let anothername = myYoutubename
    anothername = "chaiaurcode"

    console.log(myYoutubename);
    console.log(anothername);

    let userOne = {
        email: "user@google.com",
        upi: "user@ybl"
    }
    
    let userTwo = userOne

    userTwo.email = "akshaysaode@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);
    
    