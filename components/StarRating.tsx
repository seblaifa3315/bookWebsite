import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number; // e.g. 4.25
  max?: number;   // default 5
};

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1 text-star">
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1;

        // How much of this star should be filled (0 → 1)
        const fill = Math.min(Math.max(rating - (starValue - 1), 0), 1);

        // Snap to quarters (0, 0.25, 0.5, 0.75, 1)
        const snappedFill = Math.round(fill * 4) / 4;

        if (snappedFill === 0) {
          // Empty
          return (
            <Star
              key={i}
              size={20}
              className="text-star/30"
            />
          );
        }

        return (
          <div key={i} className="relative w-5 h-5">
            {/* Empty star background */}
            <Star
              size={20}
              className="absolute inset-0 text-star/30"
            />

            {/* Filled portion */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${snappedFill * 100}%` }}
            >
              <Star
                size={20}
                fill="currentColor"
                className="text-star"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
