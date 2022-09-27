inbuilt function:
```
return haystack.find(needle)
```


checking for the whole word:
```
def strStr(self, haystack: str, needle: str) -> int:
        n = len(needle)
        for i in range(len(haystack)-n+1):
            if needle == haystack[i:n+i]:
                return i
        return -1
```
