// src/structural/Sponsors/body/Upcoming/SponsorRow.js

import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: ${(props) => props.align};
	align-items: center;
	flex-wrap: nowrap;
	padding: 0 10px;
	margin-bottom: 10px;
`;

const SponsorRow = ({children, align = 'center'}) => (
	<RowContainer align={align}>{children}</RowContainer>
);

export default SponsorRow;
