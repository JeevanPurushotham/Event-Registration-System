const Event = require("./../Model/eventModel")

exports.getAllEvents = async (req, res, next) => {
    try{
        const events = await Event.find()
        res.status(200).json({
            status : "success",
            length : events.length,
            data : {
                events
            },
            message: "Events retrieved successfully"
        })

    }catch(err){
        res.status(404).json({
            status : "fail",
            message :  "Unable to get Events list"
        })
    }
}

exports.getEvent = async (req, res, next) => {
    try{
        const id = req.params.id.replace(":", "")
        const event = await Event.findById(id)
        res.status(200).json({
            status : "success",
            data : {
                event
            }
        })

    }catch(err){

        res.status(404).json({
            status : "fail",
            message :  "Can not find event with given event id"
        })
    }
}

exports.createEvent = async (req, res, next) => {
    try{
        const event = await Event.create(req.body)
        res.status(200).json({
            status : "success",
            data : {
                event
            },
            message: "Event registration successful"
        })

    }catch(err){
        res.status(404).json({
            status : "fail",
            message : "Unable to register Event"
        })
    }
    
}

exports.updateEvent = async (req, res, next) => {
    try{
        const id = req.params.id.replace(":", "")
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})

        res.status(200).json({
            status : "success",
            data : {
                updatedEvent
            },
            message: "event update successful"
        })

    }catch(err){

        res.status(404).json({
            status : "fail",
            message : "Unable to update Event"
        })
    }
}

exports.deleteEvent = async (req, res, next) => {
    try{
        const id = req.params.id.replace(":", "")
        const deletedEvent = await Event.findByIdAndDelete(id)

        res.status(200).json({
            status : "success",
            data : {
                deletedEvent
            },
            message: "Event deleted successful"
        })

    }catch(err){

        res.status(404).json({
            status : "fail",
            message : "Unable to delete Event"
        })
    }
}