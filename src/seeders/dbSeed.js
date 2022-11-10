const { User, Admin, Product } = require('../models');
const bcrypt = require('bcryptjs');
const { MODE_ADMIN } = require('../config/constants');

const InitDataSeed = async () => {
  const hashpassword = await bcrypt.hash('123456789', 12);
  const userData = [
    {
      firstName: 'Way',
      lastName: 'WayYa',
      email: 'way@gmail.com',
      password: hashpassword,
      phoneNumber: '0535632115'
    }
  ];

  const adminData = [
    {
      firstName: 'Admin',
      lastName: 'DDD',
      email: 'admin@gmail.com',
      password: hashpassword,
      phoneNumber: '0862145632',
      type: MODE_ADMIN
    }
  ];

  //https://www.facebook.com/MCSfruits/photos
  const ProductData = [
    {
      name: 'แอปเปิ้ลเขียว',
      price: 69,
      quantity: 100,
      image:
        'https://res.cloudinary.com/waniga/image/upload/v1667123161/product/311571605_546635307467533_4655041256995476386_n_gnf6wb.jpg'
    },
    {
      name: 'แก้วมังกร',
      price: 100,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/v1667123120/product/313196933_548439443953786_3217916635141825654_n_bddo1a.jpg'
    },
    {
      name: 'อโวคาโด้',
      price: 59,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/w_500,ar_1:1/v1667123103/product/312797055_548401590624238_3251238549302335216_n_esybrx.jpg'
    },
    {
      name: 'ส้มเขียวหวาน',
      price: 69,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/w_500,ar_1:1/v1667123068/product/312042050_549423373855393_519405644419716205_n_o3jypq.jpg'
    },
    {
      name: 'องุ่นแดง',
      price: 250,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/w_500,ar_1:1/v1667123402/product/313178406_547549637376100_4314951625857993846_n_gt0vmn.jpg'
    },
    {
      name: 'กีวี เรนโบว์',
      price: 50,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/w_500,ar_1:1/v1667123516/product/312581131_544811254316605_3322465039260800770_n_hybqky.jpg'
    },
    {
      name: 'พุทราพันธุ์ chocolate',
      price: 150,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/w_500,ar_1:1/v1667123621/product/313020480_544722804325450_3971185912025128958_n_xkldet.jpg'
    },
    {
      name: 'Strawberry from australia',
      price: 220,
      quantity: 1000,
      image:
        'https://res.cloudinary.com/waniga/image/upload/w_500,ar_1:1/v1667123746/product/310683522_532477895549941_7375763970922969994_n_nu56ul.jpg'
    }
  ];

  // insert data to db;
  let resUser = await User.bulkCreate(userData);
  let resAdmin = await User.bulkCreate(adminData);
  let resProduct = await Product.bulkCreate(ProductData);
  //   console.log(res);
  process.exit(0);
};

InitDataSeed();
