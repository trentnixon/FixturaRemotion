import styled from 'styled-components';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';

export const RosterSponsors = (props) => {
	return (
		<Sponsors>
			<DisplaySponsor {...props} />
		</Sponsors>
	);
};

const DisplaySponsor = (props) => {
	const {matchData} = props;
	const {sponsors} = matchData;
	return (
		<SponsorContainer>
			{sponsors?.map((sponsor) => {
				return (
					<ImageWithFallback
						src={{url: sponsor.Logo}}
						style={{
							width: '95%',
							height: 'auto',
							objectFit: 'cover',
							margin: '15px 0',
						}}
					/>
				);
			})}
		</SponsorContainer>
	);
};

const SponsorContainer = styled.div`
	padding: 15px;
	background-color: ${(props) => props.BGColor};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: ${(props) => props.borderRadius};
	justify-content: center;
	margin: 0;
	height: 100%;
`;

const Sponsors = styled.div`
	height: auto;
	width: 350px;
	margin-bottom: 0px;
	justify-content: center;
	align-content: center;
	height: 100vh;
	margin: 0;
	position: absolute;
	right: 0;
`;
