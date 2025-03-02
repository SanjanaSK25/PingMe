const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then( (res) => {
    console.log("connection successful");
})
.catch( (err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [   
    {
        from: "Rahul",
        to: "Sanjana",
        msg: "Can you share the report for the meeting?",
        created_at: new Date()
    },
    {
        from: "Ananya",
        to: "Karan",
        msg: "Let's discuss the project plan tomorrow.",
        created_at: new Date()
    },
    {
        from: "Vikram",
        to: "Sanya",
        msg: "Don't forget to submit the budget proposal.",
        created_at: new Date()
    },
    {
        from: "Arjun",
        to: "Neha",
        msg: "Check the new marketing strategies in the file.",
        created_at: new Date()
    },
    {
        from: "Meera",
        to: "Ravi",
        msg: "Can you assist?",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Priya",
        msg: "Let's sync up about the new feature tomorrow.",
        created_at: new Date()
    },
    {
        from: "Neha",
        to: "Sanjana",
        msg: "Please send me the exam question bank.",
        created_at: new Date()
    }
];


Chat.insertMany(allChats);