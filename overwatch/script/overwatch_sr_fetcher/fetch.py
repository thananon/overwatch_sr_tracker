import re

f = open('ArMzi-6984','r')

w = open("sr-armzi",'r+')
if w:
    for line in w:
        last = line
    last = last.strip('\n')
    print "last = "+last
    w.close
else:
    last = -1
 

w = open("sr-armzi",'a+')

for line in f:
    res = re.findall('\>([0-9]{4})\<',line)
    if len(res) > 0:
        if last == res[0]:
            print 'same'
        else :
            w.write(res[0]+'\n')
        break 

