/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    return this._sumValuesHelper(this.root);
  }

  _sumValuesHelper(node) {
    let sum = node.val;
    for (const child of node.children) {
      sum += this._sumValuesHelper(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    return this._countEvensHelper(this.root);
  }

  _countEvensHelper(node) {
    let count = node.val % 2 === 0 ? 1 : 0;
    for (const child of node.children) {
      count += this._countEvensHelper(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    return this._numGreaterHelper(this.root, lowerBound);
  }

  _numGreaterHelper(node, lowerBound) {
    let count = node.val > lowerBound ? 1 : 0;
    for (const child of node.children) {
      count += this._numGreaterHelper(child, lowerBound);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };