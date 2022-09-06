import './ArtworkItem.css';
import { useState } from 'react';

const viewBtnTxt = 'View Artwork';
const hideBtnTxt = 'Hide Artwork';

export function ArtworkItem({
	artist_title,
	date_display,
	image_id,
	title,
	thumbnail,
}) {
	const [showItemImage, setShowItemImage] = useState(false);
	const [buttonText, setButtonText] = useState(viewBtnTxt);

	function viewItemImage() {
		setShowItemImage((showItemImage) => !showItemImage);
		if (buttonText === viewBtnTxt) {
			setButtonText(hideBtnTxt);
		} else {
			setButtonText(viewBtnTxt);
		}
	}

	return (
		<div className="item-container">
			{showItemImage && (
				<img
					alt={thumbnail.alt_text}
					src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
				/>
			)}
			<p>
				Title: <span className="title">{title}</span>
			</p>
			<p>Artist: {artist_title}</p>
			<p>Date: {date_display}</p>
			<button type="button" onClick={viewItemImage}>
				{buttonText}
			</button>
		</div>
	);
}
