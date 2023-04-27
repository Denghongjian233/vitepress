# 算法

没有捷径，就是硬刷

## 两数之和

```js
const twoSum = (nums,target) =>{
  const map = new Map()
  const len = nums.length
  for(let i = 0;i<len;i++){
    if(map.has(target-nums[i])){
      return [map.get(target-nums[i]),i]
    }else{
      map.set(nums[i],i)
    }
  }
}
```

## 