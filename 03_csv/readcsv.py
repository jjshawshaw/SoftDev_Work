f = open("occupations.csv", 'r')
dict = {}
for line in f:
    quoted = False
    for i in range(len(line)):
        char = line[i]
        if char == "\"" and not quoted:
            quoted = True
        elif char == "\"" and quoted:
            quoted = False
        elif char == "," and not quoted:
            dict[line[0:i]] = line[i+1:len(line) - 1]

print(dict)
