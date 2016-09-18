var friends = new Object();
friends.steve = 
{
    firstName: "Steve",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
friends.bill = 
{
    firstName: "Bill",
    lastName: "Smith",
    number: "666-666-666",
    address: []
};
var list = function (friends) 
{
    for(var firstName in friends)
    {
        console.log(firstName);
    }        
}
var search = function (name)
{
    for(var firstName in friends)
    {
        if(friends[firstName].firstName === name)
        {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }     
}