# Week Three

## 递归 - 循环

- 代码结构
  1.递归终结条件；
  2.处理当前层逻辑；
  3.下探到下一层；
  4.清理当前层；

```
// Java
public void recur(int level, int param) {
  
  // terminator
  if (level > MAX_LEVEL) {
    // process result
    return;
  }

  // process current logic
  process(level, param);

  // drill down
  recur(level: level + 1, newParam);

  // restore current status
}
```
```
// Python
def recursion(level, param1, param2,...):
  # recursion terminator
  if level > MAX_LEVEL:
    process_result
    return

  # process login in current level
  process(level, data...)

  # drill down
  self.recursion(level + 1, p1,...)

  # reverse the current level status if needed
```

- 思维要点
  1. 不要人肉递归
  2. 找到最近最简方法，将其拆解成可重复解决的问题（重复子问题)
  3. 数学归纳法思维

## 分治
```
// python
def divide_conquer(problem, param1, param2, ...):
  # recursion terminator
  if problem is None:
    print_result
    return
  # prepare data
  data = prepare_data(problem)
  subproblems = split_problem(problem, data)
  # conquer subproblems
  subresult1 = self.divide_conquer(subproblems[0], p1, ...)
  subresult2 = self.divide_conquer(subproblems[1], p1, ...)
  subresult3 = self.divide_conquer(subproblems[2], p1, ...)

  # process and generate the final result
  result = process_result(subresult1, subresult2, subresult3, ...)

  # revert the current level states
```

## 回溯