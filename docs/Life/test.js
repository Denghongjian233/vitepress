var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', (str)=> {
    var max = 0;
    for(let i=0; i<str.length; i++){
        let n = i-1;
        let m = i+1;
        while(n>=0 && m<str.length && str[n] == str[m]){
            max = Math.max(m-n+1, max);
            n--;
            m++;
        }
    }
    
    for(let i=0; i<str.length; i++){
        let n = i;
        let m = i+1;
        while(n>=0 && m<str.length && str[n] == str[m]){
            max = Math.max(m-n+1, max);
            n--;
            m++;
        }
    }
    console.log(max);
})