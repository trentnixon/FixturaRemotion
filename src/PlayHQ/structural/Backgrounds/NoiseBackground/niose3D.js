import {noise3D} from '@remotion/noise';
import styled from 'styled-components';
import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {lightenColor} from '../../../utils/colors';
import {useStylesContext} from '../../../context/StyleContext';

const OVERSCAN_MARGIN = 80;
const ROWS = 30;
const COLS = 30;

export const NoiseComp = ({speed, circleRadius, maxOffset}) => {
	const frame = useCurrentFrame();
	const {height, width} = useVideoConfig();
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;

	return (
		<NoiseContainer>
			<svg width={width} height={height}>
				{new Array(COLS).fill(0).map((_, i) =>
					new Array(ROWS).fill(0).map((__, j) => {
						const x = i * ((width + OVERSCAN_MARGIN) / COLS);
						const y = j * ((height + OVERSCAN_MARGIN) / ROWS);
						const px = i / COLS;
						const py = j / ROWS;
						const dx = noise3D('x', px, py, frame * speed) * maxOffset;
						const dy = noise3D('y', px, py, frame * speed) * maxOffset;
						const opacity = interpolate(
							noise3D('opacity', i, j, frame * speed),
							[-1, 1],
							[0, 0.3]
						);
						const key = `${i}-${j}`;
						// Console.log(x , dx)
						return (
							<circle
								key={key}
								cx={x + dx}
								cy={y + dy}
								r={circleRadius}
								fill={lightenColor(Color.Primary.Main)}
								opacity={opacity}
							/>
						);
					})
				)}
			</svg>
		</NoiseContainer>
	);
};

const NoiseContainer = styled.div`
	position: absolute;
	width: 1246px;
	height: 1661px;
	left: 0px;
	top: 0px;
	z-index: 0;
`;
