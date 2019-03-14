//let ran_num = Math.random();
//函数表达式
const hongbao=(total,num)=>{
    const arr=[];
    //定义计算量
    let restAmount = total,
    restNum = num;
    for(let i=0;i<num-1;i++){
        //前n-1次随机
        // restAmount/restNum*2*Math.random();
        // 10人，100元
        // 100/10*2 （0,20）平均十块 公平
        // 90/9*2    (0,20) 10 
        // let amount=parseFloat(Math.random()*((restAmount/restNum)*2-0)).toFixed(2);
        let amount=Math.random()*((restAmount/restNum)*2-0).toFixed(2);
        restAmount -=amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    return arr;
}
console.log(hongbao(20,47));