class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        list_s = list(s)
            # get indexes of vowels
        vowel_indexes=[]
        for i in range(len(list_s)):
            if list_s[i] in ["a","i","e","o","u","A","I","E","O","U"]: 
                vowel_indexes.append(i)
            # make a reversed list of vowels
        vowels_reversed=[list_s[i] for i in vowel_indexes[::-1]]
            # replace vowels with new list
        for i in range(len(vowel_indexes)): 
            list_s[vowel_indexes[i]]=vowels_reversed[i]
        return "".join(list_s)