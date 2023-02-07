// 广度优先查找
// 1. 从根节点开始,沿着树的宽度遍历树的节点
// 2. 如果所有节点均被访问,则算法中止,否则,返回第一个未被访问的节点
// 3. 对该节点的所有未被访问的邻接点,从第一个邻接点开始,重复步骤1和2
// 4. 仍然是从第一个邻接点开始,对所有未被访问的邻接点重复步骤1和2
// 5. 直到所有节点都被访问为止,算法结束

function bfs(node) {
  const nodes = [];
  if (node) {
    const queue = [];
    queue.push(node);
    while (queue.length) {
      const item = queue.shift();
      nodes.push(item);
      const children = item.children;
      for (let i = 0; i < children.length; i++) {
        queue.push(children[i]);
      }
    }
  }
  return nodes;
}

// 深度优先查找
// 1. 访问根节点
// 2. 对根节点的子节点依次进行深度优先遍历
// 3. 重复步骤2,直到所有节点都被访问为止

function dfs(node) {
  const nodes = [];
  if (node) {
    nodes.push(node);
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      nodes.push(...dfs(children[i]));
    }
  }
  return nodes;
}

// - 什么时候使用深度优先搜索（DFS）与广度优先搜索（BFS）:  https://blog.csdn.net/xfxf996/article/details/107230270

/* 
深度优先遍历就是从上到下，当我们搜索一个树时，我们从根开始，遇到一个节点，就先查询的它的子节点，如果子节点还有子节点就继续往下寻找直到最后没有为止，再从根子节点的兄弟节点开始依次向下寻找节点。 


而广度优先遍历遍历就是从根节点开始，寻找子节点，先遍历寻找兄弟节点，依次从上往下，按层级依次搜索。广度优先遍历的时间明显比深度优先的时间效率要高，广度优先遍历是用队列记录了每一个节点的位置，所以会占用内存更多点，由于深度优先遍历是从根节点往子节点依次递归查询，当子节点查询完了，就从根的节点的兄弟节点依次往下搜索，所以比较耗时，搜索效率上广度优先遍历更高。
*/
