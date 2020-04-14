
let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());


// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let staffs = [{'id':0,'name':'pooh','surname':'baring','position':'doctor','time':'13:00','tell':'0987649986'},
   {'id':1,'name':'yoo','surname':'baring','position':'nurse','time':'15:00','tell':'0980009986'}
];

// router.route('/staff').get((req, res) =>  res.json(staff) );
router.route('/staffs')
   // get all bears
   .get( (req, res) =>  res.json(staffs) ) 


.post( (req, res)=> {
    var staff = {};
    staff.id =  staffs[staffs.length-1].id+1;
    staff.name = req.body.name
    staff.surname = req.body.surname
    staff.position = req.body.position
    staff.time = req.body.time
    staff.tell = req.body.tell
    staffs.push(staff);
    res.json( {message: 'staff created!'} )
})
//param
router.route('/staffs/:staff_id')
   .get ( (req,res) => {
        let id = req.params.staff_id
        let index = staffs.findIndex( staff => (staff.id === +id) )
        res.json(staffs[index])                   // get a bear
    })  

    .put ( (req,res) => {                               // Update a bear
        let id = req.params.staff_id
        let index = staffs.findIndex( staff => (staff.id === +id) )
        staffs[index].name = req.body.name;   
        staffs[index].surname = req.body.surname;   
        staffs[index].position = req.body.position;   
        staffs[index].time = req.body.time;   
        staffs[index].tell = req.body.tell;   
        res.json({ message: 'Staff updated!' + req.params.staff_id});
    })

    .delete ( (req,res) => {                   // Delete a bear
        // delete     bears[req.params.bear_id]
        let id = req.params.staff_id
        let index = staffs.findIndex( staff => staff.id === +id  )
        staffs.splice(index,1) 
        res.json({ message: 'Staff deleted: ' + req.params.staff_id});
    })


app.use("*", (req,res) => res.status(404).send('404 Not found') );
app.listen(process.env.PORT|| 80,  () => console.log("Server is running") );
