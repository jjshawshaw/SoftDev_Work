import random
f = open("occupations.csv", 'r')
dict = {}
lines = f.read().split("\n")
for line in lines[1:len(lines)-2]:
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
                dict[line[0:i]] = float(line[i+1:len(line)])
            else:
                dict[line[1:i-1]] = float(line[i+1:len(line)])

def randomOccupation():
    sim = []
    for occupation in dict:
        for i in range(int(dict[occupation] * 10)):
            sim.append(occupation)
    return random.choice(sim)

def tester(valuenum):
    print(f"Testing randomOccupation() with {valuenum} random selections:")
    test = []
    for i in range(valuenum):
        test.append(randomOccupation())
    for occupation in dict:
        print(f"Occupation: {occupation}")
        testvalue = test.count(occupation)/(valuenum / 100)
        print(f"Test: {testvalue}%")
        print(f"Expected: {dict[occupation]}%")
        print(f"Percent error: {abs((testvalue - dict[occupation])/dict[occupation])*100:.3f}%\n")




#print(dict)
#print(randomOccupation())
tester(10000)
