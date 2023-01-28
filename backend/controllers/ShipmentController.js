let Shipments= require('../models/Shipments')



module.exports=  getAllShipment = async (req, res, next)=> {
    try{        
        await    Shipments
  .find()
  .then(doc => {
    console.log(doc)
    res.status(200).send({"data":doc})
  })
  .catch(err => {
    console.error(err)
  })

    }catch(err){
       console.log("we in getAllShipment controller error",err)
       
    }


}

module.exports=  getAllShipmentBusiness = async (req, res, next)=> {
    try{        
        Shipments
  .find({
    SenderID: req.body.name   // search query
  })
  .then(doc => {
    console.log(doc)
    res.status(200).send({"data":doc})
  })
  .catch(err => {
    console.error(err)
  })

    }catch(err){
       console.log("we in getAllShipmentBusiness controller error",err)
       
    }


}

module.exports= createShipment = async (req, res, next)=> {
    try{            
        
let Shipment = new Shipments({
    Source:req.body.Source,
    Destination:req.body.Destination,
    TentativePrice:req.body.TentativePrice,
    FinalPrice:0,
    SenderID:req.body.SenderID,
    reciverID:req.body.reciverID,
    approval:0,

 
   
})

Shipment.save()
   .then(doc => {
     console.log(doc)
     res.status(200).send("Shipment has been created!")    
   })
   .catch(err => {
     console.error(err)
   })


    }catch(err){
       console.log("we in createShipment controller error",err)
       
    }


}

module.exports=  editShipmentAdmin  = async (req, res, next)=> {
    try{
        Shipments
  .findOneAndUpdate(
    {
        _id: req.body._id   // search query
    }, 
    {
        FinalPrice:req.body.TentativePrice,
        approval:1,   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log(doc)
    res.status(200).send("Shipment has been Updated!")   
  })
  .catch(err => {
    console.error(err)
  })
                
    }catch(err){
       console.log("we in Shipment controller error",err)
       
    }


}



module.exports=  editShipmentbusiness  = async (req, res, next)=> {
    try{
        Shipments
  .findOneAndUpdate(
    {
        _id: req.body._id   // search query
    }, 
    {
        Source:req.body.Source,
        Destination:req.body.Destination,
        TentativePrice:req.body.TentativePrice,
        FinalPrice:req.body.FinalPrice,
        reciverID:req.body.reciverID,
        approval:req.body.approval,        // field:values to update
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


module.exports= deleteShipmentbusiness = async (req, res, next)=> {
    try{   
        
        Shipments
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