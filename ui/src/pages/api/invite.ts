import { auth, isAuthenticated } from "middleware";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import * as nodemailer from "nodemailer";

import { client } from "../lib/edgedb";
import { random32CharString } from "../lib/generate";
import inviteEmailTemplate from "../lib/inviteEmailTemplate";
import { createInvite, deleteInvite } from "queries";

const handler = nextConnect();

async function inviteHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  switch (method) {
    case "POST":
      const { email } = body;
      const { origin } = req.headers;
      const signupKey = random32CharString();
      await createInvite(client, { email, key: signupKey }).then(
        async (invite) => {
          if (invite) {
            const signupLink = `${origin}/signup?key=${invite.key}`;
            const { EMAIL, APP_PASSWORD } = import.meta.env;
            const emailBody = inviteEmailTemplate({
              baseUrl: origin,
              signupLink,
            });

            const transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true,
              auth: {
                user: EMAIL,
                pass: `${APP_PASSWORD}`,
              },
            });

            await transporter
              .sendMail({
                from: `"Kyle Johnson" <${EMAIL}>`,
                to: invite.email,
                subject: "Invite to kylejohnson.xyz",
                html: emailBody,
              })
              .then(({ response }) => {
                const code = Number(response.split(" ")[0]);
                res.status(code).send(`Invite sent to ${invite.email}`);
              })
              .catch(({ response, responseCode }) => {
                deleteInvite(client, { key: invite.key });
                res.status(responseCode).send(response);
              });
          } else {
            res.status(404).end();
          }
        }
      );
      break;
  }
}

export default handler.use(auth).use(isAuthenticated).all(inviteHandler);
