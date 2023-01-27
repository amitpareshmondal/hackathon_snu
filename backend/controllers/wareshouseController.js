let Warehouses= require('../models/Warehouses')

export const getWarehouse = async (req, res, next)=> {
    try{        
        Warehouses
  .find({
    _id: req.body._id   // search query
  })
  .then(doc => {
    console.log(doc)
    res.status(200).send({"data":doc})
  })
  .catch(err => {
    console.error(err)
  })

    }catch(err){
       console.log("we in getWarehouse controller error",err)
       
    }


}

export const createWarehouse = async (req, res, next)=> {
    try{            
        
let warehouse = new Warehouses({
  CurrentVolume:req.body.CurrentVolume,
  Country:req.body.Country,
  MaxVolume:req.body.MaxVolume,
  BusinessID:req.body.BusinessID,
  Products:[],
   
})

warehouse.save()
   .then(doc => {
     console.log(doc)
     res.status(200).send("Warehouse has been created!")    
   })
   .catch(err => {
     console.error(err)
   })



        
    }catch(err){
       console.log("we in createWarehouse controller error",err)
       
    }


}

export const  editWarehouse  = async (req, res, next)=> {
    try{
        Warehouses
  .findOneAndUpdate(
    {
        _id: req.body._id   // search query
    }, 
    {
        CurrentVolume:req.body.CurrentVolume,
        Country:req.body.Country,
        MaxVolume:req.body.MaxVolume,
        BusinessID:req.body.BusinessID,
        Products:req.body.BusinessID.Products   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
    res.status(200).send("user has been Updated!")   
  })
  .catch(err => {
    console.error(err)
  })
                
         
    }catch(err){
       console.log("we in controller error",err)
       
    }


}

export const deleteWarehouse = async (req, res, next)=> {
    try{   
        
        Warehouses
        .findOneAndRemove({
            _id: req.body._id 
        })
        .then(response => {
            console.log(response)
            res.status(200).send("Warehouse has been deleted!")  
        })
        .catch(err => {
            console.error(err)
        })


          
    }catch(err){
       console.log("we in controller error",err)
       
    }


}