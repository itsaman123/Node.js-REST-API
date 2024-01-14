var query1={

}
const Product=require('../models/product');
const data=async(kv)=>{
    const mydata=await Product.find(kv);
    return mydata;
}


const data2=async(kv)=>{
    const mydata=await Product.find(kv).sort("price");
    return mydata;
}



query1.data2=data2;
query1.data=data;



module.exports=query1;