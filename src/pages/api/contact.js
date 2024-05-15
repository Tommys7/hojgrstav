import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: "mlsn.140edfc67dab113d0d291f82fe21f6654e0c5401cb00215d756b56a293bc17bf",
});

export default async function handler(
    req,
    res
) {
    const data = await req.body;

    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const phone = data.phone;
    const inq = data.inq;

    const sentFrom = new Sender("info@hojgrstav.cz", "Tomas Hojgr");

    const recipients = [
        new Recipient("tomas.hojgr23@gmail.com ", "Tomas Hojgr")
    ];

    const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject("Nova poptavka")
    .setText(`Jmeno: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\n${inq}`);

    await mailerSend.email.send(emailParams);

    console.log(
        firstName,
        lastName,
        email,
        phone,
        inq
    )

    res.status(200).json({
        success: true,
      });
}
