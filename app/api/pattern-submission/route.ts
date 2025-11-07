// app/api/pattern-submission/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, SubmissionStatus } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.patternName || !body.patternCode) {
      return NextResponse.json(
        {
          success: false,
          error: "Pattern name and pattern code are required",
        },
        { status: 400 }
      );
    }

    // Create the pattern submission with all fields optional except name and code
    const submission = await prisma.patternSubmission.create({
      data: {
        patternName: body.patternName,
        patternCode: body.patternCode,
        submitterName: body.submitterName || "Anonymous",
        submitterEmail: body.submitterEmail || "",
        patternType: body.patternType || "background",
        category: body.category || "Uncategorized",
        description: body.description || null,
        previewImage: body.previewImage || null,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Pattern submitted successfully",
      submissionId: submission.id,
    });
  } catch (error) {
    console.error("Error submitting pattern:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit pattern. Please try again.",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve submissions (for admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const submissions = await prisma.patternSubmission.findMany({
      where: status ? { status: status as SubmissionStatus } : undefined,
      orderBy: { createdAt: "desc" },
      take: 50, // Limit to 50 most recent
    });

    // FIXED: Return as 'data' to match frontend expectation
    return NextResponse.json({
      success: true,
      data: submissions, // Changed from 'submissions' to 'data'
    });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch submissions",
      },
      { status: 500 }
    );
  }
}
