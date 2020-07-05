# Week Four

## 深度优先搜索
- DFS 代码 - 递归写法
```
visited = set()
def dfs(node, visited):
    # terminator
    if node in visited:
        # already visited
        return

    visited.add(node)

    # process current node here.
    ...
    for next_node in node.children():
        if not next_node in visited:
            dfs(next node, visited)
```

- DFS 代码 - 非递归写法
```
def DFS(self, tree):
    if tree.root is Node:
        return []
    visited, stack = [], [tree.root]

    while stack:
        node = stack.pop()
        visited.add(node

        process (node)
        nodes = generate_related_nodes(node)
        stack.push(nodes)
    
    # other procesing work
```

## 广度优先搜索

- BFS 代码
```
def BFS(graph, start, end):
    queue = []
    queue.append([start])
    visited.add(start)

    while queue:
        node = queue.pop()
        visited.add(node)

        process(node)
        nodes = generate_reated_nodes(node)
        queue.push(nodes)
# other processing work

```

## 二分查找

- 二分查找的前提
1. 目标函数单调性（单调递增或者递减）
2. 存在上下界（bounded)
3. 能够通过索引访问（index accessible)

- 代码模版
```
left, right = 0, len(array) - 1
while left <= right:
  mid = (left + right)/2
  if array[mid] = target:
    # find the target
    break or return result
  elif array[mid] < target:
    left = mid + 1
  else: 
    right = mid - 1
```

## 贪心算法

一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。

贪心算法与动态规划的不同在于它对每个子问题的解决方案都做出选择，不能回退。动态规划会保存以前的运算结果，并根据以前的结果对当前进行选择，有回退功能。 