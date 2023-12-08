const projects = require('../Models/projectSchema')

//addprojects
exports.addprojects = async(req,res)=>{
    console.log("inside add projects function");
    const userId = req.payload
    const projectImage = req.file.filename
    const {title} = req.body
    //console.log(`${title},${projectImage},${userId}`);
    try{
      const existingProject = await projects.findOne({projectImage})
      if(existingProject){
        res.status(406).json("this image is already exist try another !!!")
      }else{
        const newProject = new projects({
            title,projectImage,userId
        })
        await newProject.save()
        res.status(200).json(newProject)
      }
    }catch(err){
        res.status(401).json(`request failed , error :${err}`)
    }
}

//getuserproject
exports.allUserProjects = async(req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)

    }catch(err){
res.status(401).json(err)
    }
}

//delete project
exports.deleteProjectController = async (req,res)=>{
    //get project details (wanted to delete)
    const  { id } = req.params
    try{
        const removeProject = await projects.findByIdAndDelete({_id:id})
        res.status(200).json(removeProject)

    }catch(err){
    res.status(401).json(err)
   }
}