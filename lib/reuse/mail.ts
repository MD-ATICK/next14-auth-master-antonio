import { Resend } from 'resend';
import nodemailer from 'nodemailer'

// const resend = new Resend(process.env.RESEND_API_KEY);

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.NODEMAILER_GMAIL,
        pass: process.env.NODEMAILER_APP_PASS,
    },
});


export const sendVerificationEmail = async ({ email, token }: { email: string, token: string }) => {
    const confirmationLink = `${process.env.APP_URL}/auth/verification?token=${token}`

    await transporter.sendMail({
        from: "support@pureChecker.com",
        to: email,
        subject: "Pure Checker Email Validation Email",
        html: `<p>Click the link below to confirm your email: <a href=${confirmationLink}>confirmation account</a></p>`,
    });
}

export const sendResetEmail = async ({ email, token }: { email: string, token: string }) => {
    const confirmationLink = `${process.env.APP_URL}/auth/reset-password?token=${token}`
    await transporter.sendMail({
        from: "support@pureChecker.com",
        to: email,
        subject: "Pure Checker Email Validation Email",
        html: `<p>Click the link below to reset your password: <a href=${confirmationLink}>confirmation account</a></p>`,
    });
}

export const sendTwoFactorMail = async ({ email, otp }: { email: string, otp: string }) => {
    await transporter.sendMail({
        from: "support@pureChecker.com",
        to: email,
        subject: "Pure Checker Email Validation Email",
        html: `<p>your otp is : <b>${otp}</b>. <br/> it valid for last 60 minutes.</p>`,
    });
}