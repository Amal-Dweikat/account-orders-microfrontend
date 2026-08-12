import { pendingReviews } from './mock-data';
import type {Review} from "../ models/review.ts";


export class ReviewService {

    static getPendingReviews(): Review[] {

        return pendingReviews;

    }

    static submitReview(
        id: number,
        rating: number,
        comment: string
    ): void {

        const review = pendingReviews.find(
            item => item.id === id
        );

        if (review) {

            review.rating = rating;
            review.comment = comment;

            console.log('Review submitted:', review);

        }

    }

}