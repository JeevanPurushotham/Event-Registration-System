const Participant = require("./../Model/participantModel")

exports.getAllParticipantsByEventId = async (req, res) => {
    try{
        const participants = await Participant.find({event_id: req.params.id})
        res.status(200).json({
            status : "success",
            length :  participants.length,
            data : {
                participants
            },
            message : "participant  list successfully retrieved"
        })

    }catch(err){
        res.status(404).json({
            status : "fail",
            message : "Unable view participants list"
        })
    }
}

exports.createParticipant = async (req, res) => {
    try{
        const newParticipants = await Participant.create(req.body)

        res.status(200).json({
            status : "success",
            data : {
                newParticipants
            },
            message:"participant registered successfully",
        })

    }catch(err){

        res.status(404).json({
            status : "fail",
            message :  "Unable register participants"
        })
    }
    
}
