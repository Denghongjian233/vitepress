var a = function(){
    this.b = 3
}
var c = new a()

a.prototype.b = 9

console.log(c)

console.log(a)

