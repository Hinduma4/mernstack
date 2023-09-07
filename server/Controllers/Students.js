import users from "../Model/studentSchema.js";

export const createStudent = async (req, res) => {
    const data = new users({
        Name: req.body.Name,  //na
        Course: req.body.Course, //cou
        Email: req.body.Email,
        Contact: req.body.Contact,
        Fees: req.body.Fees,
    });
    console.log("saving in db",req.body);
    try{
        await data.save();
        res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

export const getStudent = async (req, res) => {
    console.log("getstudent");
    try{
        const details = await users.find();
        res.status(200).json(details)
    }catch(err){
        console.log(err);
    }
}

export const updateStudent = async (req, res) => {
    console.log("student is updated",req.body);
    try{
        const update = await users.findByIdAndUpdate(
            { _id: req.body._id },
            {
                $set: {
                    Name: req.body.Name,
                    Course: req.body.Course,
                    Email: req.body.Email,
                    Contact: req.body.Contact,
                    Fees: req.body.Fees,
                }
            },
            {new:true}
        );
        res.status(200).json(update);
    }catch(err) {
        console.log(err);
    }
};

export const deleteStudent = async(req,res) => {
    console.log("DeleteStudent",req.params.id);
    try{
       await users.findByIdAndDelete(req.params.id);
       res.status(200).json("Student deleted");
    }catch(err){
       console.log(err);
    }
};