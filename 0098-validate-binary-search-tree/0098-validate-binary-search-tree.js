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
        return [...inOrder(root.left),root.val,...inOrder(root.right)]
    }
    const result = inOrder(root)
    for (let i=1;i<result.length;i++) if (result[i] <= result[i-1]) return false
    return true
    
};