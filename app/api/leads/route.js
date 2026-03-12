export const runtime = "nodejs"; // important for Twilio

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"
import Twilio from "twilio";

// WHATSAPP AUTOMATION
const twilioClient = Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


export async function POST(req) {
    try {

        const body = await req.json()

        const {
            fullName,
            phone,
            email,
            location,
            address,
            budgetType,
            propertyType,
            monthlyBill,
            urgency,
            message
        } = body



        // Validation
        if (
            !fullName ||
            !phone ||
            !email ||
            !location ||
            !address ||
            !budgetType ||
            !propertyType ||
            !urgency
        ) {
            return NextResponse.json(
                { error: "All required fields must be filled" },
                { status: 400 }
            )
        }

        if (phone.length < 11) {
            return NextResponse.json(
                { error: "Invalid phone number" },
                { status: 400 }
            )
        }

        const { data, error } = await supabase
            .from("leads")
            .insert([
                {
                    full_name: fullName,
                    phone,
                    email,
                    location,
                    address,
                    property_type: propertyType,
                    budget_type: budgetType,
                    monthly_bill: monthlyBill,
                    urgency,
                    message
                }
            ])
            .select()
            .single();




        if (error || !data) {
            console.error("Supabase insert error:", error);
            return NextResponse.json(
                { error: error?.message || "Failed to create lead" },
                { status: 500 }
            );
        }

        // 3️⃣ Send WhatsApp alert
        const messageBody = `🔥 NEW SOLAR LEAD ALERT 🔥
\nName: ${fullName}
\nPhone: ${phone}
\nEmail: ${email}
\nLocation: ${location}
\nAddress: ${address}
\nBudget: ₦${budgetType}
\nProperty: ${propertyType}
\nUrgency: ${urgency}
\nMonthly-Bill:₦${monthlyBill}
\nMessage: ${message || "N/A"}
`;

        await twilioClient.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: process.env.WHATSAPP_RECIPIENT,
            body: messageBody,
        });

        return NextResponse.json(
            {
                message: "Lead created and WhatsApp sent!",
                success: true,
                leadId: data?.id || null
            },
            { status: 200 }
        )

    } catch (error) {

        return NextResponse.json(
            { error: error.message || "Server error" },
            { status: 500 }
        )

    }
}

