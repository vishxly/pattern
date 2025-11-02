// app/api/patterns/like/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserIdentifier } from '@/lib/user-identifier';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { patternId, patternType } = body;

    // Validate input
    if (!patternId || !patternType) {
      return NextResponse.json(
        { error: 'Pattern ID and type are required' },
        { status: 400 }
      );
    }

    if (!['background', 'button'].includes(patternType)) {
      return NextResponse.json(
        { error: 'Invalid pattern type' },
        { status: 400 }
      );
    }

    // Get user identifier
    const userIdentifier = await getUserIdentifier(request.headers);

    // Check if already liked
    const existingLike = await prisma.patternLike.findUnique({
      where: {
        patternId_patternType_userIdentifier: {
          patternId,
          patternType,
          userIdentifier,
        },
      },
    });

    let liked = false;
    let likeCount = 0;

    if (existingLike) {
      // Unlike - Remove the like
      await prisma.$transaction(async (tx) => {
        await tx.patternLike.delete({
          where: {
            id: existingLike.id,
          },
        });

        // Update count
        const count = await tx.patternLikeCount.upsert({
          where: {
            patternId_patternType: {
              patternId,
              patternType,
            },
          },
          update: {
            likeCount: {
              decrement: 1,
            },
          },
          create: {
            patternId,
            patternType,
            likeCount: 0,
          },
        });

        likeCount = Math.max(0, count.likeCount);
      });

      liked = false;
    } else {
      // Like - Add the like
      await prisma.$transaction(async (tx) => {
        await tx.patternLike.create({
          data: {
            patternId,
            patternType,
            userIdentifier,
          },
        });

        // Update count
        const count = await tx.patternLikeCount.upsert({
          where: {
            patternId_patternType: {
              patternId,
              patternType,
            },
          },
          update: {
            likeCount: {
              increment: 1,
            },
          },
          create: {
            patternId,
            patternType,
            likeCount: 1,
          },
        });

        likeCount = count.likeCount;
      });

      liked = true;
    }

    return NextResponse.json({
      success: true,
      liked,
      likeCount,
    });
  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json(
      { error: 'Failed to toggle like' },
      { status: 500 }
    );
  }
}
