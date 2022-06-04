console.log("Arrays 1")

// Arrays are list of items with numeric indexes as identifiers 

// Creating an array

// 1
let programmingLanguages = ["python", "java", "C#", "C++", "javascript"]

/*
        1'st Method note:
    both of the methods can be interchangeable used 
    we can also write it as 
    and then add items with index as shown below
    let programmingLanguages = []

        2nd Method note:
    you can directly add the items in the constructor "Array("React","Angular","Next.js")"
*/

// 2 
let javascriptFrameworks = new Array(3)
javascriptFrameworks[0] = "React"
javascriptFrameworks[1] = "Angular"
javascriptFrameworks[2] = "Next.js"

// Accessing Array Elements 
/*
    Array methods are acessed by indexs "arrayName[index]"
*/
console.log(javascriptFrameworks[1]+" "+programmingLanguages[4])
console.log(typeof javascriptFrameworks)
console.log(`javascriptFramework is an array:${Array.isArray(javascriptFrameworks)}`)
console.log(`another method is using instanceof,${javascriptFrameworks instanceof Array}`);


// Array methods 

/* Converting Array to strings */
let output = document.getElementById('outputArray');

output.innerHTML = javascriptFrameworks.toString();

let output2 = document.getElementById('outputArray2');

output2.innerHTML = programmingLanguages.join(" ")

/* Push and Pop */
let games = ["WWE2k16","NBA","Resident Evil VII","Fifa"]
console.log(games)
console.log(games.pop());
console.log(games)

let socialMediaPlatforms = ["Reddit","Instagram","Twitter","Snapchat","9Gag"]
console.log(socialMediaPlatforms.push("Whatsapp"))
console.log(socialMediaPlatforms)

// Shifting using .shift() method 
/* shift removes the first element and shifts all the other elements to a lower index */
console.log(socialMediaPlatforms.shift())
socialMediaPlatforms.unshift("Tinder")
socialMediaPlatforms.push("Discord")
console.log(socialMediaPlatforms)


// slice() and splice()
let fruits = ["mango","banana","orange","pineapple"]
console.log(fruits);
let removed = fruits.splice(0,0,"spliced")
console.log(fruits);

// sort() and reverse()
console.log(fruits.reverse())
console.log(fruits.sort())
