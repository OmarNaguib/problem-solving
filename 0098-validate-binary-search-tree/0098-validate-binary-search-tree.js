/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function inOrder(root){
        if (!root) return []
        if (!root.left && !root.right) return [root.val]
        return [...inOrder(root.left),root.val,...inOrder(root.right)]
    }
    const result = inOrder(root)
    let past = result [0];
    for (number of result.slice(1)){
        if (number <= past) return false
        past = number
    }
    return true
    
};