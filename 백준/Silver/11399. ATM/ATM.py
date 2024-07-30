n = int(input())
l = list(map(int, input().split()))
l.sort()
for i in range(1 , len(l)):
    l[i] = l[i-1] + l[i]
print(sum(l))