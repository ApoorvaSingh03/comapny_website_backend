import { sendEmailAdmin, sendEmailUser } from "../utils/emailService.js";

const bookDemo = async (req, res) => {
    const { name, email, contact, prefferedDate, prefferedTime, interest } = req.body;

    if (!name || !email || !contact)
        return res.status(400).json({ message: "Please fill in all fields" });


    try {
        await sendEmailUser(name, email);
        await sendEmailAdmin(name, email, contact, prefferedDate, prefferedTime, interest );


        res.status(201).json({ message: "Email sent Successfully!!!" })

    } catch (error) {
        console.log("Error sending mail:", error)
        res.status(500).json({ message: "Failed to send mail" })

    }

}
export { bookDemo };