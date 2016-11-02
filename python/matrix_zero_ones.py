#  Set every cell in matrix to 0 if that row or column contains a 0
#  http://stackoverflow.com/questions/339262/set-every-cell-in-matrix-to-0-if-that-row-or-column-contains-a-0

import pprint

m = [[1, 0, 1, 1, 0],
     [0, 1, 1, 1, 0],
     [1, 1, 1, 1, 1],
     [1, 0, 1, 1, 1],
     [1, 1, 1, 1, 1]]



N = len(m)

### pass 1

# 1st line/column
c = 1
for i in range(N):
    c &= m[i][0]

l = 1
for i in range(1,N):
    l &= m[0][i]


# other line/cols
# use line1, col1 to keep only those with 1
for i in range(1,N):
    for j in range(1,N):
        if m[i][j] == 0:
            m[0][j] = 0
            m[i][0] = 0
        else:
            m[i][j] = 0

pprint.pprint(m)
### pass 2

# if line1 and col1 are ones: it is 1
for i in range(1,N):
    for j in range(1,N):
        if m[i][0] & m[0][j]:
            m[i][j] = 1

# 1rst row and col: reset if 0
if l == 0:
    for i in range(N):
        m [i][0] = 0

if c == 0:
    for j in range(1,N):
        m [0][j] = 0


pprint.pprint(m)