import express from "express"
import { createStudent,getStudent,
    updateStudent,
    deleteStudent} from "../Controllers/Students.js"


const route = express.Router();
 
route.post("/cs",createStudent)
route.get("/get",getStudent)
route.put("/update",updateStudent)
route.delete("/delete/:id",deleteStudent);
export default route;