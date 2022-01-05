export const FooterSocialMediaView = ({ item }) => {
	return (
		<>
			<div className="footer__media-item">
				<a href={item.pathTo}>
					<img src={item.icon} alt="instagram" />
				</a>
			</div>
		</>
	);
};
