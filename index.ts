type person={
    id?:number, 
    name: string,
    birthdate:string,
    children:number,
    country: string,
    can_program:boolean;
}

 const people:person[]=[
    {     id:1,
        name:"Jerrie Ferrieres",
        birthdate:"6/16/2001",
        children:4,
        country:"Namibia",
        can_program:true},

    {   id:2,
        name:"Joice Cornbell",
        birthdate:"7/18/2001",
        children:4,
        country:"China",
        can_program:false},

    {   id:3,
        name:"Stacy Whitten",
        birthdate:"4/25/1967",
        children:4,
        country:"Albania",
        can_program:true},

    {   id:4,
        name:"Farrand Joscelin",
        birthdate:"2/17/2002",
        children:2,
        country:"Panama",
        can_program:false},

    {   id:5,
        name:"Duff Sancraft",
        birthdate:"10/11/1969",
        children:2,
        country:"Poland",
        can_program:false},

    {   id:6,
        name:"Valencia Gamell",
        birthdate:"5/2/1965",
        children:0,
        country:"China",
        can_program:true},

    {   id:7,
        name:"Wyatan Rawls",
        birthdate:"10/31/1964",
        children:1,
        country:"China",
        can_program:false},

    {   id:8,
        name:"Faber Marris",
        birthdate:"10/30/1951",
        children:3,
        country:"Poland",
        can_program:false},

    {   id:9,
        name:"Alysia Grist",
        birthdate:"8/22/1951",
        children:0,
        country:"South Korea",
        can_program:true},

    {   id:10,
        name:"Ray Chasteau",
        birthdate:"12/22/1974",
        children:4,
        country:"Somalia",
        can_program:false
    }
]

// This is explain that I´m using a loop to go through each person in the people array.
    for(let i=0; i < people.length;i++){
// Print the person's name and the number of children they have in output
        console.log(people[i].name + " has "+ people[i].children + " children")
    }
// Start with a total count of children set to 0
    let totalChildren = 0;
// Loop through each person in the 'people' array
    for (let i = 0; i < people.length; i++) 
// It´s adding the number of children for the current person to the total
    {
    totalChildren += people[i].children;
    }
// After the loop, print the total number of children
    console.log("Total number of children:", totalChildren);

//
    for(let i = 0; i < people.length;i++)
// That print the person's name and birthdate in output
     console.log(people[i].name +" ",people[i].birthdate)

//
    for (let i = 0; i <people.length; i++) 
    {
// Here I´m deleted the 'id' property from the current person
    delete people[i].id;
// Now, because I deleted "id" print the current person's details without the 'id' in output
    console.log(people[i]);
// Here I wanna check if the current person can program
    if (people[i].can_program && people[i].can_program) 
// so if they can program, it´ll print "Yes" instead "true"
    {
    console.log("Yes");
    }
// so if they can´t program, it´ll print "No" instead "false"
    else {
    console.log("No");
    }
    };
