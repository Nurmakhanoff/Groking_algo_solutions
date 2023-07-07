#1.6 You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer—you may be surprised!)
# So, only the names that starts with the letter A.
phonebook = ["Alice", "Andrey", "Bob", "Bib", "Crow", "Raven", "Max", "Victor", "Wren"]
for name in phonebook:
    if name.startswith("A"):
        print(name)
print("If the phonebook is sorted by names, and we only need the names of the first letter of  alphabet, so algorithm for that would be linear time, O(n). After all, all of the names can start with A.")
