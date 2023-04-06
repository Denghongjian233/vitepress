# 项目实战

只改patch 热更新

webpack 开发效率 

vite具体

cnpm 是什么？

## 配置@

配置@符号

## 升级问题

3 向下兼容 可写 2 的代码

2 的写法加新特性

3 语法糖 setup

三种写法 数据和方法放一起 不乱 上下一块不好 组合式API 选项式API 

object.definepropty 无法监听对象新增属性 具体表现为无法 给新增属性添加set和get方法 递归？算法复杂度

this.$set(对象，属性，值)

this指向vue 

vue3 的.value 就不用$setle 

reactive 只能写对象或者数组

接口拿到的数据是ref

性能提升 劫持数据

2 object.defineproperty 第一层 没有递归 + $set

循环

3 proxy x 也没有get set  return + 另外一个es6的方法 flictible 不循环

setup语法糖插件 unplugin-auto-improt

autoimprot 
## torefs 

torefs reactive的数据由于解构赋值变成非响应式的 此时加上torefs转换成响应式对象

mapstate 底层原理

computed 

watch 监听多个ref 上来就监听 immediately:true 无需深度监听 只监听一个属性（）=> 

三层对象 深度监听

watchEffect 理解执行 

router route

## 生命周期

on keepalive 错误抛出的钩子



let obj

## 路由

router 版本的升级 4 

router.push 

导航守卫 beforeEnter next() 路由独享守卫

## 父传子

defineProps({
    MSG:{
        TYPE:STRING,
        DEFALUT:"111"
    }
})
## 子传父
emit 

## v-model应用在组件上

unpdate

## 兄弟组件的传值

数据都放在父组件上

## 代理

代理解决跨域问题（ proxy 


## 程序员的核心

会借力、执行力、社交。

沟通表达。



