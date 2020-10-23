const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'migzeng27@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'migzeng27@gmail.com',
        subject: 'We\'re sad to see you go!',
        text: `Dear ${name}, \n \nWe appreciate the time you decided to spend with our service but now we are sad to see you go. Your account has been deleted. \n \nBest wishes from our team`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}