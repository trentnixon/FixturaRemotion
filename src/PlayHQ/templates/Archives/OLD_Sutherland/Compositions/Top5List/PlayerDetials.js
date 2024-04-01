import styled from 'styled-components';
import {getContrastColor} from '../../../../../utils/colors';
import {removeEmojis, restrictName, restrictString} from '../../../../../utils/copy';
import { FromLeftToRight } from '../../../../../Animation/ClipWipe';
import {useCurrentFrame} from 'remotion';
const PlayerMetaContainer = styled.div`
	text-align: center;
	line-height: 1em;
	font-weight: 200;
`;

const PlayerName = styled.h1`
	font-size: 3.5em;
	text-wrap: nowrap;
	line-height: 1em;
	margin: 0 0 20px 0;
	letter-spacing: -1px;
	font-weight: 600;
`;

const PlayerGradeTeam = styled.h1`
	font-size: 2.9em;
	text-wrap: nowrap;
	line-height: 1.2em;
	margin: 0;
	letter-spacing: 0px;
	font-weight: 200;
`;

export const PlayerDetails = (props) => {
	const {THEME, i, player} = props;
    const frame = useCurrentFrame();
	return (
		<PlayerMetaContainer>
			<PlayerName
				style={{
					color: getContrastColor(THEME.secondary),
					fontFamily: 'Oswald',
				}}
			>
				{restrictName(player.name, 20)}
			</PlayerName>
			<PlayerGradeTeam
				style={{
                    clipPath:FromLeftToRight((120),'Wobbly'),
					color: getContrastColor(THEME.secondary),
					fontFamily: 'Oswald',
                   /*  opacity: interpolateOpacityByFrame(
                        frame,
                        200,
                        210,
                        1,
                        0
                    ), */
                   
				}}
			>
				{restrictString(removeEmojis(player.playedFor), 25)}  
			</PlayerGradeTeam>
			<PlayerGradeTeam
				style={{
                    clipPath:FromLeftToRight((130),'Wobbly'),
					color: getContrastColor(THEME.secondary),
					fontFamily: 'Oswald',
                    fontSize:'2.1em'
				}}
			>
				vs: {restrictString(removeEmojis(player.playedAgainst), 30)}
			</PlayerGradeTeam>
		</PlayerMetaContainer>
	);
};
