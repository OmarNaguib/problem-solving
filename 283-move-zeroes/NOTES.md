​learning notes

refactoring for my solution 
```
count=nums.count(0)
nums[:]=[i for i in nums if i != 0]
nums+=[0]*count

```

better solution:

```
def moveZeroes(self, nums):
    zero = 0  # records the position of "0"
    for i in xrange(len(nums)):
        if nums[i] != 0:
            nums[i], nums[zero] = nums[zero], nums[i]
            zero += 1
```
         
main concept: 2 pointer approach

looping with an ordinary pointer, and another pointer that gets incremented as long as the elemnt is non-zero
swap the values stored at both pointer everytime there is a non-zero element
if there are no zeros, the elemnts gets swapped withitself
when there is a zero the pointer does not increase and therefore holds the index of the unswapped zero
next, when a non-zero is encounterd it is swapped with the elemnt at the zero pointer

![image](https://user-images.githubusercontent.com/55961349/188899469-b573b238-caff-4194-b30f-311d70f8b0c2.png)

