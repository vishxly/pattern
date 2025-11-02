// app/api/patterns/top/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserIdentifier } from '@/lib/user-identifier';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patternType = searchParams.get('patternType') || 'background';
    const limit = parseInt(searchParams.get('limit') || '20');

    if (!['background', 'button'].includes(patternType)) {
      return NextResponse.json(
        { error: 'Invalid pattern type' },
        { status: 400 }
      );
    }

    // Get user identifier
    const userIdentifier = await getUserIdentifier(request.headers);

    // Get top patterns by like count
    const topPatterns = await prisma.patternLikeCount.findMany({
      where: {
        patternType,
        likeCount: {
          gt: 0,
        },
      },
      orderBy: {
        likeCount: 'desc',
      },
      take: limit,
      select: {
        patternId: true,
        likeCount: true,
      },
    });

    // Get user's liked patterns from the top list
    const patternIds = topPatterns.map((p) => p.patternId);
    const userLikes = await prisma.patternLike.findMany({
      where: {
        patternType,
        userIdentifier,
        patternId: {
          in: patternIds,
        },
      },
      select: {
        patternId: true,
      },
    });

    const userLikedIds = new Set(userLikes.map((like) => like.patternId));

    // Format response
    const patterns = topPatterns.map((pattern) => ({
      patternId: pattern.patternId,
      likeCount: pattern.likeCount,
      isLiked: userLikedIds.has(pattern.patternId),
    }));

    return NextResponse.json({
      success: true,
      patterns,
    });
  } catch (error) {
    console.error('Error fetching top patterns:', error);
    return NextResponse.json(
      { error: 'Failed to fetch top patterns' },
      { status: 500 }
    );
  }
}
