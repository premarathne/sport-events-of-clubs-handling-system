const router = require('express').Router();
let MedicinOrder = require('../models/medicinorder.model');
let Single = require('../models/single.model');
let ContactUs = require('../models/contactus.model');
let Complain = require('../models/complain.model');
//let Team = require('../models/team.model');
const cors = require('cors')
const multer = require('multer');
const nodemailer = require('nodemailer');

router.use(cors());

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './../public/upload/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.route('/').get((req, res) => {
  MedicinOrder.find()
    .then(medicinorders => res.json(medicinorders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((upload.single('img')),(req, res) => {
console.log(req.file);
  const userID = req.body.userID;
  const eventName = req.body.eventName;
  const sport = req.body.sport;
  const organizer = req.body.organizer;
  const time = req.body.time;
  const date = req.body.date;
  const discription = req.body.discription;
  const rules = req.body.rules;
  const price = req.body.price;
  const img = req.file.filename;

  const newMedicinOrder = new MedicinOrder({
      userID,
      eventName,
      sport,
      organizer,
      time,
      date,
      discription,
      rules,
      price,
      img
  });
console.log(newMedicinOrder)
  MedicinOrder.create(newMedicinOrder)
  .then(() => res.json('Medicin Order added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((upload.single('img')),(req, res) => {
console.log(req.file);
console.log(req.params.id);
console.log(req.body.eventName);
  MedicinOrder.findById(req.params.id)
  .then(event => {
	  event.userID = req.body.userID;
	  event.eventName = req.body.eventName;
	  event.sport = req.body.sport;
	  event.organizer = req.body.organizer;
	  event.time = req.body.time;
	  event.date = req.body.date;
	  event.discription = req.body.discription;
	  event.rules = req.body.rules;
	  event.price = req.body.price;

  console.log(event);
  event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
console.log(req.params.id);
  MedicinOrder.find({userID:req.params.id})
    .then(medicinorder => {res.json(medicinorder)
    console.log(medicinorder)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/event/:id').get((req, res) => {
console.log(req.params.id);
  MedicinOrder.find({userID:req.params.id})
    .then(medicinorder => {res.json(medicinorder)
    console.log(medicinorder)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/event').post((req, res) => {
console.log(req.params.id);
  MedicinOrder.find()
    .then(medicinorder => {res.json(medicinorder)
    console.log(medicinorder)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/oneevent/:id').get((req, res) => {
console.log(req.params.id);
  MedicinOrder.find({_id:req.params.id})
    .then(medicinorder => {res.json(medicinorder)
    console.log(medicinorder)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/playerreg').post((upload.single('img')),(req, res) => {
console.log(req.body)
  const eventID = req.body.eventID;
  const player = req.body;
  console.log(player)
  const newSingle = new Single({
	eventID,
	player
  });
console.log(newSingle)
  Single.create(newSingle)
  .then(() => res.json('player added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/singleplayers/:id').get((req, res) => {
console.log(req.params.id);
  Single.find({eventID:req.params.id})
    .then(medicinorder => {res.json(medicinorder)
    console.log(medicinorder[0].player.email)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
console.log(req.params.id)
  MedicinOrder.findByIdAndDelete(req.params.id)
    .then(() => res.json('Player Add.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/delete/:id').post((req, res) => {
  console.log(req.params.id)
  MedicinOrder.findByIdAndDelete(req.params.id)
    .then(() => res.json('user deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/send/:id', (req, res) => {

console.log(req.params.id);
console.log(req.body.msg)

  var  x ='';

  Single.find({eventID:"5ed384da9f461e107729116c"})
    .then(single => {
     for (i = 0; i < single.length; i++) {
        x +=single[i].player.email + ',';
        console.log(x)
        
        
     }
     
     x = x.substring(0, x.length - 1);
     console.log(x);
       
  const output = `
    
    <h3>Massage form Sporty.com</h3>
    <p>You have a new contact request</p>
    <p>${req.body.msg}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'lorencechamly@gmail.com', // generated ethereal user
        pass: '111Lorence'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  
  

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact"  chamlylorence@gmail.com', // sender address
      to: x, // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.json("send");
  });
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
    


  });
  
 
 
 
 router.post('/contactus', (req, res) => {
console.log(req.body.name)
  const userData = {
    name: req.body.name,
    email: req.body.email,
    msg: req.body.msg,
   }
          ContactUs.create(userData)
            .then(user => {              
              res.status(200).json({ status: user.email + 'Done!' })
            },console.log("ok"))
            .catch(err => {
              res.send('error: ' + err)
            })


})

router.post('/getcontactus', (req, res) => {
console.log("getcontactus")
 ContactUs.find()
    .then(msg => res.json(msg))
    .catch(err => res.status(400).json('Error: ' + err));

}) 

 router.post('/complain', (req, res) => {
console.log(req.body.username)
  const userData = {
    eventID: req.body.eventID,
    msg: req.body.msg,
   }
          Complain.create(userData)
            .then(user => {              
              res.status(200).json({ status: user.email + ' Done!' })
            },console.log("ok"))
            .catch(err => {
              res.send('error: ' + err)
            })


})

router.post('/getcomplain/:id', (req, res) => {
console.log(req.body.username)
 Complain.find({eventID:req.params.id})
    .then(msg => res.json(msg))
    .catch(err => res.status(400).json('Error: ' + err));

})
  

module.exports = router;
