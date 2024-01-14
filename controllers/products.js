const query1 = require('../app_modules/query');
const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  try {
     const { company, name,featured } = req.query;

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

    console.log(queryObject);
    const mydata = await query1.data(queryObject);
    res.status(200).json({ Products: mydata });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






const getAllProductsTesting = async (req, res) => {
  const mydata=await query1.data2(req.query);
  res.status(200).json(mydata)
  // res.status(200).json({ message: 'I am getAllProductsTesting' });
};

module.exports = { getAllProducts, getAllProductsTesting };
