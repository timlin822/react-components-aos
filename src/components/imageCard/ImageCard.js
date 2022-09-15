import './ImageCard.css';

const ImageCard=({image})=>{
    return (
		<div className="image-row">
			<div className="image-card" data-aos={image.effect}>
				<img src={image.url} alt="image" />
			</div>
		</div>
    );
}

export default ImageCard;