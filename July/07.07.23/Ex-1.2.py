#1.2 Suppose you have a sorted list of 256 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?
import math
# names is list for 256 names that already sorted
def binary_search(list, item): 
  low = 0
  high = len(list)-1
  steps=0
  while low <= high: 
    mid = (low+high) // 2
    guess = list[mid] 
    steps+=1
    if guess == item:
      return steps
    elif list.index(guess) > list.index(item): 
      high = mid
    elif list.index(guess) < list.index(item): 
      low = mid
    else:
      return -1
    
names = [
"Aaron", "Abigail", "Adam", "Alex", "Alexander", "Alexandra", "Alexis", "Alice", "Allison", "Alyssa", "Amelia", "Amy", "Andrew", "Angelina", "Anna", "Annabelle","Anthony", "Ashley", "Austin", "Ava", "Avery", "Bailey", "Benjamin", "Brandon", "Brian", "Brianna", "Brooke", "Caleb", "Cameron", "Caroline", "Carter", "Charlotte", "Chloe", "Christian", "Christopher", "Claire", "Claudia", "Cole", "Colin", "Connor", "Courtney", "Daniel", "Danielle", "David", "Dylan", "Eleanor", "Elena", "Eli", "Elijah", "Elizabeth", "Ella", "Ellie", "Emily", "Emma", "Eric", "Ethan", "Eva", "Evan", "Evelyn", "Gabriel", "Gabriella", "Gavin", "Gianna", "Grace", "Hailey", "Haley", "Hannah", "Harper", "Hayden", "Henry", "Hudson", "Hunter", "Ian", "Isaac", "Isabella", "Jack", "Jackson", "Jacob", "Jaden", "Jake", "James", "Jasmine", "Jason", "Jessica", "John", "Jonathan", "Jordan", "Joseph", "Joshua", "Julia", "Julian", "Justin", "Kaitlyn", "Katherine", "Kayla", "Kevin", "Kimberly", "Kyle", "Lauren", "Liam", "Lillian", "Lily", "Logan", "Lucas", "Luke", "Madison", "Mason", "Matthew", "Max", "Megan", "Michael", "Mia", "Natalie", "Nathan", "Nicholas", "Noah", "Oliver", "Olivia", "Owen", "Patrick", "Rachel", "Ryan", "Samuel", "Sarah", "Saraha", "Sarahb", "Sarahc", "Sarahd", "Sarahe", "Sarahf","Sarahg","Sarahh","Sarahi","Sarahj","Sarahk","Sarahl","Sarahm","Sarahn","Saraho","Sarahp","Sarahq","Sarahr","Sarahs","Saraht","Sarahu","Sarahv","Sarahw","Sarahx","Sarahy","Sarahz", "Savannah", "Savannaha", "Savannahb", "Savannahc", "Savannahd", "Savannahe", "Savannahf", "Savannahg", "Savannahh", "Savannahh", "Savannahi", "Savannahj", "Savannahk", "Savannahl", "Savannahm", "Savannahn", "Savannaho", "Savannahp", "Savannahq", "Savannahr", "Savannahs", "Savannaht", "Savannahu", "Savannahv", "Savannahw", "Savannahx", "Savannahy", "Savannahz",  "Sofia",  "Sofiaa",  "Sofiab",  "Sofiac",  "Sofiad",  "Sofiae",  "Sofiaf",  "Sofiag",  "Sofiah",  "Sofiai",  "Sofiaj",  "Sofiak",  "Sofial",  "Sofiam",  "Sofian",  "Sofiao",  "Sofiap",  "Sofiaq",  "Sofiar",  "Sofias",  "Sofiat",  "Sofiau",  "Sofiav",  "Sofiaw", "Sophiax","Sophiay","Sophiaz", "Sophie", "Sophiea", "Sophieb", "Sophiec", "Sophied", "Sophiee", "Sophief", "Sophieg", "Sophieh", "Sophiei", "Sophiej", "Sophiek", "Sophiel", "Sophiem", "Sophien", "Sophieo", "Sophiep", "Sophieq", "Sophier", "Sophies", "Sophiet", "Sophieu", "Sophiev", "Sophiew", "Sophiex", "Sophiey", "Sophiez", "Suma", "Sumb", "Sumc", "Sumd", "Sume", "Sumf", "Sumg", "Sumh", "Sumi", "Sumj", "Sumk", "Suml", "Summ", "Sumn", "Sumo", "Sump", "Sumq", "Sumr", "Sums", "Sumt", "Sumu", "Sumv", "Sumw", "Sumx"
]
answer= binary_search(names, "Sophied")
# Every step in binary search you guess the name in the middle of the list and eliminate half of the remaining names
print("Amount of names in list is " + str(len(names)))
print("Maximum number of steps it would take for binary search to found the right name is " + str(math.log(len(names), 2)))
print ("The number of steps it would take to find the right name is " + str(answer))
