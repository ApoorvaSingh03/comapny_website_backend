import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

const sendEmailUser = async (name, email) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "DEMO BOOKED CONFIRMATION MAIL",
        html: `
        <p>
        Hi <strong>${name}</strong>,
        <br><br>Thank you for booking a demo. Your demo has been successfully booked! 
        <br><br>Best Regards,
        <br>Team Netfotech
        </p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);

    } catch (error) {
        console.log("Error sending email:", error);
    }
};

const sendEmailAdmin = async (name, email, contact, prefferedDate, prefferedTime, interest) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_COMPANY,
        subject: "NEW DEMO BOOKING",
        html: `
      <h3>New Demo Request Details</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Contact:</strong> ${contact}</li>
        <li><strong>Preferred Date:</strong> ${prefferedDate || "N/A"}</li>
        <li><strong>Preferred Time:</strong> ${prefferedTime || "N/A"}</li>
        <li><strong>Area of Interest:</strong> ${interest}</li>
      </ul>
      <p>
      Please follow up with the client accordingly
      <br>Best Regards,
      <br>Team Netfotech
      <p>
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent !!`);

    } catch (error) {
        console.log("Error sending email:", error);
    }
};

export { sendEmailUser, sendEmailAdmin };