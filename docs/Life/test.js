function generateOutSequences(inSeq) {
    const stack = []; // 使用栈存储临时的出站顺序
    const result = []; // 存储所有的出站顺序
  
    function backtrack(inSeq, outSeq, stack, result) {
      if (inSeq.length === 0 && stack.length === 0) {
        result.push(outSeq.slice()); // 将当前出站顺序加入结果中
        return;
      }
  
      if (inSeq.length > 0) {
        const newStack = stack.slice(); // 复制栈
        newStack.push(inSeq.shift()); // 将当前入站火车移到栈中
        backtrack(inSeq, outSeq, newStack, result); // 递归调用生成下一个序列
        inSeq.unshift(newStack.pop()); // 恢复入站火车的顺序
      }
  
      if (stack.length > 0) {
        const newStack = stack.slice(); // 复制栈
        const newOutSeq = outSeq.slice(); // 复制出站顺序
        newOutSeq.push(newStack.pop()); // 将栈顶火车移出栈并加入出站顺序
        backtrack(inSeq, newOutSeq, newStack, result); // 递归调用生成下一个序列
      }
    }
  
    backtrack(inSeq, [], stack, result);
    result.sort(); // 对结果进行字典序排序
    return result;
  }
  