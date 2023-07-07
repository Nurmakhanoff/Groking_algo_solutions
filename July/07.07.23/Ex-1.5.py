#1.5 You want to read the numbers of every person in the phone book.
def simple_search(list, number):
  for i in range(len(list)):
    if(list[i]==number):
      return i+1;
    else:
      i+=1
phonebook = [87765014263, 8732462534, 814723823, 862394752]
# If you want to read the numbers of every person in the phone book.
answer = (len(phonebook))
print ("For phonebook with "+ str(answer) +" numbers, the answer is " + str(answer))

# If you want to read the numbers of every person in the phone book.
print ("The linear time Big O complexity is O(n)")
