import s from './CamperReviews.module.css';
import Rating from './Rating/Rating';

const CamperReviews = ({ reviews }) => {
	return (
		<div className={s.wrapper}>
			<ul className={s.reviewsList}>
				{reviews?.map((review, index) => {
					return (
						<li className={s.reviewsItem} key={index}>
							<div className={s.ratingWrapper}>
								<div className={s.avatar}>
									<span className={s.avatarName}>{review.reviewer_name[0]}</span>
								</div>
								<div className={s.ratingBox}>
									<p className={s.name}>{review.reviewer_name}</p>
									<Rating rating={review.reviewer_rating} />
								</div>
							</div>
							<p className={s.text}>{review.comment}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CamperReviews;
