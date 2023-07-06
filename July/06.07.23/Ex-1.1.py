#1.1 Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?
import math
# names is list for 128 names that already sorted
names = [
"Aaron", "Abigail", "Adam", "Alex", "Alexander", "Alexandra", "Alexis", "Alice", "Allison", "Alyssa", "Amelia", "Amy", "Andrew", "Angelina", "Anna", "Annabelle","Anthony", "Ashley", "Austin", "Ava", "Avery", "Bailey", "Benjamin", "Brandon", "Brian", "Brianna", "Brooke", "Caleb", "Cameron", "Caroline", "Carter", "Charlotte", "Chloe", "Christian", "Christopher", "Claire", "Claudia", "Cole", "Colin", "Connor", "Courtney", "Daniel", "Danielle", "David", "Dylan", "Eleanor", "Elena", "Eli", "Elijah", "Elizabeth", "Ella", "Ellie", "Emily", "Emma", "Eric", "Ethan", "Eva", "Evan", "Evelyn", "Gabriel", "Gabriella", "Gavin", "Gianna", "Grace", "Hailey", "Haley", "Hannah", "Harper", "Hayden", "Henry", "Hudson", "Hunter", "Ian", "Isaac", "Isabella", "Jack", "Jackson", "Jacob", "Jaden", "Jake", "James", "Jasmine", "Jason", "Jessica", "John", "Jonathan", "Jordan", "Joseph", "Joshua", "Julia", "Julian", "Justin", "Kaitlyn", "Katherine", "Kayla", "Kevin", "Kimberly", "Kyle", "Lauren", "Liam", "Lillian", "Lily", "Logan", "Lucas", "Luke", "Madison", "Mason", "Matthew", "Max", "Megan", "Michael", "Mia", "Natalie", "Nathan", "Nicholas", "Noah", "Oliver", "Olivia", "Owen", "Patrick", "Rachel", "Ryan", "Samuel", "Sarah", "Savannah", "Sofia", "Sophia", "Sophie"
]
# Every step in binary search you guess the name in the middle of the list and eliminate half of the remaining names
print("Amount of names in list is " + str(len(names)))
print("Maximum number of steps it would take for binary search to found the right name is " + str(math.log(len(names), 2)))
