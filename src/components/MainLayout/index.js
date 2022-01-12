import { HeaderContainer } from "../Header/containers/HeaderContainer";
import { FooterContainer } from "../Footer/container/FooterContainer";

export const MainLayout = ({ children }) => {
	return (
		<>
			<HeaderContainer />
			{children}
			<FooterContainer />
		</>
	);
};
