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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
//     calculate sum of depth of left and right for every node
//     make max comparison with the children's result
    if (!root) return 0
    function maxDepth(root){
        if (!root) return 0
        return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
    }
    function depthDiff(root){
        if (!root) return 0
        return  maxDepth(root.right) + maxDepth(root.left)
    }
    
    return Math.max(depthDiff(root),diameterOfBinaryTree(root.right),diameterOfBinaryTree(root.left))
    
    
};