import { NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.POSTGRES_URL!)

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    // VALIDATION
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama minimal 2 karakter" },
        { status: 400 }
      )
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email tidak valid" },
        { status: 400 }
      )
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan minimal 10 karakter" },
        { status: 400 }
      )
    }

    const result = await sql`
      INSERT INTO messages (name, email, subject, message)
      VALUES (
        ${name.trim()},
        ${email.trim().toLowerCase()},
        ${subject?.trim() || ""},
        ${message.trim()}
      )
      RETURNING id, created_at
    `

    return NextResponse.json(
      {
        success: true,
        id: result[0].id,
        created_at: result[0].created_at,
      },
      { status: 201 }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
