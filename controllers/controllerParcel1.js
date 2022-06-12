//THE FIRST OF GETTING DIFFERENT ROUTES

let userDB =  require('../model/user2.json')

const path = require('path')
const fsPromises = require('fs').promises

const getParcel =(req,res)=>{
    res.json(userDB)
}

// const postParcel= async(req,res)=>{
//     const parcelD = data.parcel.find((item)=>item.id === req.body.id)

//     console.log(parcelD)
//     const newOrder = {
//         unique_id:req.body.id,
//         receiver_name:req.body.name,
//         parcel_content:req.body.type,
//         parcel_destination:req.body.destination
//     }
//     if(!newOrder.receiver_name || !newOrder.parcel_content ||!newOrder.parcel_destination || !newOrder.unique_id){
//         res.status(403).json({"message":"parcel details are required"})
//     }
    
//     if(parcelD){
//         const consignment = ({...parcelD,newOrder})
//         const OtherParcel = vendorData.find((item)=>item.id === parcelD.id)
//         console.log(consignment)
//         if(OtherParcel){
//             const otherVendorParcel = vendorData.filter((item)=>item.id !== OtherParcel.id)
//             EveyVendorParcel = ([...otherVendorParcel,consignment])
//             await fsPromises.writeFile(path.join(__dirname,'..','model','vendor.json'),JSON.stringify(EveyVendorParcel))
//             res.status(201).json({message:"Parcel already exist"})
//         }else {
//             vendorData.push(consignment)
//             await fsPromises.writeFile(path.join(__dirname,'..','model','vendor.json'),JSON.stringify(vendorData))
//             res.status(201).json({message:"new parcel added"})
//         }
//     }else{
//         res.status(403).json({message:"You have not registered user"})
//     }
    
    
// } 



const postParcel= async(req,res)=>{
    const parcelD = userDB.find((item)=>item.id === req.body.id)

    console.log(parcelD)
    const newOrder = {
        unique_id:req.body.id,
        receiver_name:req.body.name,
        parcel_content:req.body.type,
        parcel_destination:req.body.destination
    }
    if(!newOrder.receiver_name || !newOrder.parcel_content ||!newOrder.parcel_destination || !newOrder.unique_id){
        res.status(403).json({"message":"parcel details are required"})
    }
    
if(parcelD){
    const consignment = ({...parcelD,newOrder})
    const otherParcels = userDB.filter((item)=>item.id !== req.body.id)
    const allData = ([...otherParcels,consignment])
    userDB.push(allData)
    res.status(201).json({message:"new parcel added"})
}else{
    res.status(403).json({message:"You have not registered user"})
}
} 




// const putParcel = (req,res)=>{
//     console.log(vendorData.newOrder)
//     console.log(data.parcel.id)
//     const updateParcel = data.parcel.find((item)=>{
//         return item.id === parseInt(req.body.id)
//     })
//     console.log(updateParcel.id)
//     if(!updateParcel){
//         res.status(401).json({"message":"The parcel does not exist"})
//     }
//     if(updateParcel.firstname){
//         updateParcel.firstname = req.body.firstname
//     }
//     if(updateParcel.lastname){
//         updateParcel.lastname = req.body.lastname
//     }
//     if(updateParcel.destination){
//         updateParcel.destination = req.body.destination
//     }
//     let unchangedParcel = data.parcel.filter((item)=>{
//         return item.id !== parseInt(req.body.id)
//     })
//     const newData = [...unchangedParcel,updateParcel]
//     const mainData = newData.sort((a,b)=>{
//         if(a.id > b.id){
//             return 1
//         }else if (b.id > a.id){
//             return -1
//         }else{
//             return 0
//         }
//     })

//     res.status(200).json(mainData)
// }


const putParcel = (req,res)=>{
    //console.log(data.parcel.id)
    const updateParcel = userDB.find((item)=>{
        return item.id === parseInt(req.body.id)
    })
    console.log(updateParcel.id)
    if(!updateParcel){
        res.status(401).json({"message":"The parcel does not exist"})
    }
    if(updateParcel.newOrder.receiver_name){
        updateParcel.newOrder.receiver_name = req.body.name
    }
    if(updateParcel.newOrder.parcel_content){
        updateParcel.newOrder.parcel_content = req.body.type
    }
    if(updateParcel.newOrder.parcel_destination){
        updateParcel.newOrder.parcel_destination = req.body.destination
    }
    let unchangedParcel = userDB.filter((item)=>{
        return item.id !== parseInt(req.body.id)
    })
    const newData = [...unchangedParcel,updateParcel]
    const mainData = newData.sort((a,b)=>{
        if(a.id > b.id){
            return 1
        }else if (b.id > a.id){
            return -1
        }else{
            return 0
        }
    })

    res.status(200).json(mainData)
}


const deleteParcel = (req,res)=>{
    const deleteOrder = userDB.findIndex((item)=>{
        return item.id === req.body.id
    })
    if(!deleteOrder){
        res.status(400).json({"message":`The parcel with ${deleteOrder} does not exist`})
    }
    userDB.splice(deleteOrder,1)
    res.status(200).json(data.parcel)
} 

const getspecificParcel = (req,res)=>{
    const deleteOrder = userDB.find((item)=>{
        return item.id === parseInt(req.params.id)
    })
    if(!deleteOrder){
        res.status(400).json({"message":`The parcel with ${deleteOrder} does not exist`})
    }
    res.status(200).json(deleteOrder)
}

const putSpecificParcel = (req,res)=>{
    const updateParcel = userDB.find((item)=>{
        return item.id === parseInt(req.params.id)
    })
    if(!updateParcel){
        res.status(401).json({"message":"The parcel does not exist"})
    }
    if(updateParcel.firstname){
        updateParcel.firstname = req.body.firstname
    }
    if(updateParcel.lastname){
        updateParcel.lastname = req.body.lastname
    }
    if(updateParcel.destination){
        updateParcel.destination = req.body.destination
    }
    let unchangedParcel = userDB.filter((item)=>{
        return item.id !== parseInt(req.body.id)
    })
    const newData = [...unchangedParcel,updateParcel]
    const mainData = newData.sort((a,b)=>{
        if(a.id > b.id){
            return 1
        }else if (b.id > a.id){
            return -1
        }else{
            return 0
        }
    })

    res.status(200).json(mainData)
    
}

const deleteSpecificParcel = (req,res)=>{
    const deleteOrder = userDB.find((item)=>{
        return item.id === req.params.id
    })
    if(!deleteOrder){
        res.status(400).json({"message":`The parcel with ${deleteOrder} does not exist`})
    }
    data.parcel.splice(deleteOrder,1)
    res.status(200).json(data.parcel)
    
}

module.exports = {
    getParcel,
    postParcel,
    putParcel,
    deleteParcel,
    getspecificParcel,
    putSpecificParcel,
    deleteSpecificParcel
}