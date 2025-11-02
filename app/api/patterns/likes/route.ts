// app/api/patterns/likes/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserIdentifier } from '@/lib/user-identifier';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patternType = (searchParams.get('patternType') || 'background') as 'background' | 'button';

    if (!['background', 'button'].includes(patternType)) {
      return NextResponse.json(
        { error: 'Invalid pattern type' },
        { status: 400 }
      );
    }

    // Get user identifier
    const userIdentifier = await getUserIdentifier(request.headers);

    // Get all like counts for this pattern type
    const likeCounts = await prisma.patternLikeCount.findMany({
      where: {
        patternType,
      },
      select: {
        patternId: true,
        likeCount: true,
      },
    });

    // Get user's liked patterns
    const userLikes = await prisma.patternLike.findMany({
      where: {
        patternType,
        userIdentifier,
      },
      select: {
        patternId: true,
      },
    });

    const userLikedIds = new Set(userLikes.map((like) => like.patternId));

    // Format response
    const likesMap = likeCounts.reduce((acc, item) => {
      acc[item.patternId] = {
        count: item.likeCount,
        isLiked: userLikedIds.has(item.patternId),
      };
      return acc;
    }, {} as Record<string, { count: number; isLiked: boolean }>);

    return NextResponse.json({
      success: true,
      likes: likesMap,
    });
  } catch (error) {
    console.error('Error fetching likes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch likes' },
      { status: 500 }
    );
  }
}
