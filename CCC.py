from sys import stdin,stdout,exit
input = lambda: stdin.readline()[:-1]

n,k = map(int,input().split())
arr = [int(x) for x in input().split()]
facs = [2,3,5,7,11,13,17,19]

ans = 0 
for ff in facs:
    res = [0]
    for x in arr:
        cnt = 1
        fac=ff
        while not x%fac:
            res[-1] = cnt
            cnt += 1
            fac *= ff
        if res[-1]: res += [0]
    temp = sum(res)
    ans += min(int(temp/2),temp-max(res))
    
print(ans)

#jus frq but only some prime so at most 7 distinct in each one

