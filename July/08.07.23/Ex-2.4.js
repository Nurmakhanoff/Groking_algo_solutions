//People sign up for Facebook pretty often, too. Suppose you decided to use an array to store the list of users. What are the downsides of an array for inserts? In particular, suppose you’re using binary search to search for logins. What happens when you add new users to an array?
const facebook = ["Abuka", "Ayan", "Beiba", "Cris", "Dan", "Gerald", "Gira", "Gora", "Kuat", "Sam"];
facebook.unshift = ("Aaron"); //  now  it moved all names to the right and gave it new indexes.
facebook.push = ("Key"); // now it is not sorted
console.log(facebook);
// First of all, arrays are bad for inserts, because you would move all the elements in the array to add it, you might need to resize array if there are no more space and . 
// When you will add new logins to the array, you would need to sort it somehow for binary search to work.
