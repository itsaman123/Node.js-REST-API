const query1 = require('../app_modules/query');
const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  try {
     const { company, name,featured,sort, select } = req.query;

    const queryObject = {};
    if (company) {
      queryObject.company = company;
     }

     if(featured){
      queryObject.featured = featured;
        
     }

    if (name) {
      queryObject.name = {$regex:name, $options:'i'};
    }

    let apiData=Product.find(queryObject);
    if(sort){
      let sortFix=sort.replace(","," ");
      apiData=apiData.sort(sortFix);
    }

    if(select){
      let selectFix=select.split(",").join(" ");
      apiData=apiData.select(selectFix);
    }

    const mydata=await apiData;
    res.status(200).json({ mydata });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






const getAllProductsTesting = async (req, res) => {
  const mydata=await Product.find(req.query).select("name company")
   res.status(200).json(mydata)
   
 };

module.exports = { getAllProducts, getAllProductsTesting };
