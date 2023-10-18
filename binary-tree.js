/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    return this._minDepthHelper(this.root);
  }

  _minDepthHelper(node) {
    if (!node) return Number.MAX_VALUE;
    if (!node.left && !node.right) return 1;
    return Math.min(this._minDepthHelper(node.left), this._minDepthHelper(node.right)) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    return this._maxDepthHelper(this.root);
  }

  _maxDepthHelper(node) {
    if (!node) return 0;
    const leftDepth = this._maxDepthHelper(node.left);
    const rightDepth = this._maxDepthHelper(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    const maxSumResult = this._maxSumHelper(this.root);
    return Math.max(...maxSumResult);
  }

  _maxSumHelper(node) {
    if (!node) return [0, 0];
    const left = this._maxSumHelper(node.left);
    const right = this._maxSumHelper(node.right);

    const maxChildSum = Math.max(left[0], right[0]);
    const maxSumThroughNode = Math.max(node.val, node.val + left[1], node.val + right[1], node.val + left[1] + right[1]);

    return [Math.max(maxChildSum, maxSumThroughNode), Math.max(node.val, node.val + maxChildSum)];
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    return this._nextLargerHelper(this.root, lowerBound);
  }

  _nextLargerHelper(node, lowerBound) {
    if (!node) return null;
    
    if (node.val > lowerBound) {
      const leftResult = this._nextLargerHelper(node.left, lowerBound);
      const rightResult = this._nextLargerHelper(node.right, lowerBound);
      
      if (leftResult === null && rightResult === null) {
        return node.val;
      } else if (leftResult === null) {
        return rightResult;
      } else if (rightResult === null) {
        return Math.min(node.val, leftResult);
      } else {
        return Math.min(node.val, leftResult, rightResult);
      }
    } else {
      return this._nextLargerHelper(node.right, lowerBound);
    }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    // Implement this based on the provided guidelines.
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    // Implement this based on the provided guidelines.
  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    // Implement this based on the provided guidelines.
  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    // Implement this based on the provided guidelines.
  }
}

module.exports = { BinaryTree, BinaryTreeNode };