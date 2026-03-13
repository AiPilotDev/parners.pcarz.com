import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  comment: string;
  consent: boolean;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  const payload: ContactPayload = {
    name: (body.name ?? "").trim(),
    company: (body.company ?? "").trim(),
    country: (body.country ?? "").trim(),
    email: (body.email ?? "").trim(),
    phone: (body.phone ?? "").trim(),
    comment: (body.comment ?? "").trim(),
    consent: Boolean(body.consent),
  };

  if (!payload.name || !payload.email || !payload.phone) {
    return NextResponse.json({ message: "Заполните обязательные поля: имя, email и телефон." }, { status: 400 });
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ message: "Введите корректный email." }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ message: "Нужно подтвердить согласие на обработку данных." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;
  const receiver = process.env.CONTACT_TO || gmailUser;

  if (!gmailUser || !gmailPassword || !receiver) {
    return NextResponse.json({ message: "Почтовый сервис не настроен на сервере." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const subject = `Новая заявка FluxCars от ${payload.name}`;
  const text = [
    "Новая заявка с формы сайта FluxCars",
    `Имя: ${payload.name}`,
    `Компания: ${payload.company || "-"}`,
    `Страна: ${payload.country || "-"}`,
    `Email: ${payload.email}`,
    `Телефон / Telegram: ${payload.phone}`,
    `Комментарий: ${payload.comment || "-"}`,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `FluxCars <${gmailUser}>`,
      to: receiver,
      replyTo: payload.email,
      subject,
      text,
    });

    return NextResponse.json({ message: "Сообщение отправлено." }, { status: 200 });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ message: "Не удалось отправить сообщение. Попробуйте позже." }, { status: 500 });
  }
}
