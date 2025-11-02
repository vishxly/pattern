// hooks/use-pattern-likes.ts
import { useState, useEffect } from "react";

interface LikeData {
  count: number;
  isLiked: boolean;
}

interface LikesMap {
  [patternId: string]: LikeData;
}

export function usePatternLikes(patternType: "background" | "button") {
  const [likes, setLikes] = useState<LikesMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLikes();
  }, [patternType]);

  const fetchLikes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/patterns/likes?patternType=${patternType}`
      );
      const data = await response.json();

      if (data.success) {
        setLikes(data.likes);
      }
    } catch (error) {
      console.error("Error fetching likes:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = async (patternId: string) => {
    try {
      const response = await fetch("/api/patterns/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patternId,
          patternType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setLikes((prev) => ({
          ...prev,
          [patternId]: {
            count: data.likeCount,
            isLiked: data.liked,
          },
        }));
      }

      return data;
    } catch (error) {
      console.error("Error toggling like:", error);
      throw error;
    }
  };

  const getLikeData = (patternId: string): LikeData => {
    return likes[patternId] || { count: 0, isLiked: false };
  };

  return {
    likes,
    loading,
    toggleLike,
    getLikeData,
    refetch: fetchLikes,
  };
}
