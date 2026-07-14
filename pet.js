const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://adrian:adrian123@cluster0.veegpvo.mongodb.net/petdb").then(
    () => {
        console.log("MongoDB connected")
    }
).catch(
    (err) => (
        console.log(err)
))

const Pet=mongoose.model("Pets", new mongoose.Schema(
    {
        bookingID: String,
        petName: String,
        petType: String,
        breed: String,
        age: String,
        weight: String,
        vaccStatus: String,
        ownerName: String,
        phone: String,
        email: String,
        checkIn: String,
        checkOut: String,
        kenNo: String
    }
))

app.get("/test", (req, res) => {
    res.send("hello")
})

app.post("/view-pet", async (req, res) => {
    const pets=await Pet.find()
    res.json(pets)
})

app.listen(4000,() => {
    console.log("Server started")
})