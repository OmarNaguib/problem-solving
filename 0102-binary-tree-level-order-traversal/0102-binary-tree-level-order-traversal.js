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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [root];
  let nextLevel = [];
  const result = [];
  if (root) result.push([])
  while (queue.length || nextLevel.length) {
    while (queue.length) {
      const current = queue.pop();
      if (current) {
        result[result.length - 1].push(current.val);
        if (current.right || current.left)
          nextLevel.unshift(current.right, current.left);
      }
    }
    queue = nextLevel;
    nextLevel = [];
    if (queue.length) result.push([]);
  }
  return result;
};