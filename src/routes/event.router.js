const { createEvents, getEvents, getEventsByEventsId, updateEvents, deleteevents } = require("../controllers/event.controller")

const router = require("express").Router();

router.post("/", createEvents)
router.get("/", getEvents)
router.get("/:id", getEventsByEventsId)
router.patch("/:id", updateEvents)
router.delete("/:id", deleteevents)

module.exports = router;