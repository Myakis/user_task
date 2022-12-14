import React from 'react';
import SideMenu from './LayoutPage/conponents/SideMenu';
import Content from '../containers/Main/components/Content';

const WebPage = () => (
	<div className="webPage">
		<SideMenu />
		<Content />
	</div>
);

export default WebPage;