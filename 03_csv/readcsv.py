f = open("occupations.csv", 'r')
dict = {}
first = True
for line in f:
    if first:
        first = False
    else:
        quoted = False
        containsQuote = False
        for i in range(len(line)):
            char = line[i]
            if char == "\"" and not quoted:
                quoted = True
                containsQuote = True
            elif char == "\"" and quoted:
                quoted = False
            elif char == "," and not quoted:
                if not containsQuote:
                    dict[line[0:i]] = float(line[i+1:len(line) - 1])
                else:
                    dict[line[1:i-1]] = float(line[i+1:len(line) - 1])

print(dict)
