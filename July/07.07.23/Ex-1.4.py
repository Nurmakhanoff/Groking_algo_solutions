#1.4 You have a phone number, and you want to find the person’s name in the phone book. (Hint: You’ll have to search through the whole book!)import math
def simple_search(list, number):
  for i in range(len(list)):
    if(list[i]==number):
      return i+1;
    else:
      i+=1
phonebook = [87765014263, 8732462534, 814723823, 862394752]
answer = simple_search(phonebook, 862394752)
print ("You found the number after " + answer + " tries.")

# Phone books are sorted by names, not by phones, so we can't use Binary search for number search
print ("The log time complexity is O(log n) and we can't use it because the phone book isn't sorted")

# However, if we use simple search, we will get linear time, O(n). O(256) in that case.
print ("The linear time Big O complexity is O(n) and we can freely use this")
