// "use server";

// import nodemailer from "nodemailer";
// type Tfrom = {
// 	email: string;
// 	name: string;
// };

// // TODO: transporter setup with a real host
// const transporter = nodemailer.createTransport({
// 	host: "smtp.gmail.com",
// 	port: 587,
// 	secure: false,
// 	auth: {
// 		user: "contactkobin@gmail.com",
// 		pass: "norainnoflowers",
// 	},
// });

// export async function sendEmail({ email, name }: Tfrom, message: string) {
// 	if (!email) return;
// 	console.log(email, "", name, "", message);
// 	try {
// 		const info = await transporter.sendMail({
// 			from: `${name} <${email}>`, // sender address
// 			to: "kobin369@gmail.com", // list of receivers
// 			subject: "from kobin.me", // Subject line
// 			text: message, // plain text body
// 		});
// 		// const info = await transporter.sendMail({
// 		// 	from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
// 		// 	to: "bar@example.com, baz@example.com", // list of receivers
// 		// 	subject: "Hello ✔", // Subject line
// 		// 	text: "Hello world?", // plain text body
// 		// 	html: "<b>Hello world?</b>", // html body
// 		// });

// 		console.log("Message sent: %s", info);

// 		return { success: true, data: info };
// 	} catch (error) {
// 		if (error instanceof Error)
// 			return { success: true, message: error.message };

// 		return { success: true, message: "Unknown error ocurred" };
// 	}
// }

// /* ------------------------- using resend ------------------------ */
//! resend wont work because we have to verify the email address through which we have to send emails.
// So this will work in case where I have to send emails

// // import { Resend } from "resend";
// // type Tfrom = {
// // 	email: string;
// // 	name: string;
// // };
// // const resend = new Resend(process.env.RESEND_API_KEY);
// // export async function sendEmail({ email, name }: Tfrom, message: string) {
// // 	if (!email) return;
// // 	console.log(email, "", name, "", message);
// // 	try {
// // 		const { data, error } = await resend.emails.send({
// // 			from: `${name} <${email}>`,
// // 			to: ["kobin369@gmail.com"],
// // 			subject: "from kobin.me",
// // 			text: message,
// // 		});

// // 		console.log("email-data: ", data);

// // 		if (error) {
// // 			return { success: true, message: error.message };
// // 		}

// // 		return { success: true, data };
// // 	} catch (error) {
// // 		if (error instanceof Error)
// // 			return { success: true, message: error.message };

// // 		return { success: true, message: "Unknown error ocurred" };
// // 	}
// // }
