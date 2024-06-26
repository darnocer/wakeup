import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          fields: [
            {
              name: "email",
              value: email,
            },
          ],
          context: {
            pageUri: req.headers.referer,
            pageName: "Newsletter Subscription",
          },
        }),
      }
    );

    if (response.ok) {
      res.status(200).json({ message: "Thanks, you're in!" });
    } else {
      const errorData = await response.json();
      console.error("HubSpot API Error:", errorData);
      res.status(response.status).json({
        message:
          "Sorry, there was an error. Get in touch with us at hello@microdose.wiki",
        error: errorData,
      });
    }
  } catch (error) {
    console.error("API Route Error:", error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
}
