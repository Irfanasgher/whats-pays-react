import React from 'react';
import { Col, Row, Layout, Menu, Input } from 'antd';
import axios from 'axios';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from '@ant-design/icons';
import Card from '../Card';

const { Header, Sider, Content } = Layout;

class SideNav extends React.Component {
	state = {
		collapsed: true,
		data: []
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	componentDidMount() {
		fetch('http://api.aviationstack.com/v1/flights?access_key=e9239ed0d1f551c3628cb1f1c8613605')
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						data: result.data
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className='logo' />
					<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
						<Menu.Item key='1' icon={<UserOutlined />}>
							nav 1
						</Menu.Item>
						<Menu.Item key='2' icon={<VideoCameraOutlined />}>
							nav 2
						</Menu.Item>
						<Menu.Item key='3' icon={<UploadOutlined />}>
							nav 3
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<div
						className='d-flex justify-content-between align-items-center p-4'
						style={{ background: 'black' }}>
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: this.toggle
						})}
						<div style={{ width: '95%' }}>
							<Input placeholder='Basic usage' className='ml-3' />
						</div>
					</div>
					<Content
						style={{
							// margin: '24px 16px',
							background: 'gray',
							padding: 24,
							minHeight: 280
						}}>
						<Row gutter={16}>
							{this.state.data.map((data, index) => {
								return (
									<Col xl={6} lg={6} md={12} sm={24} xs={24} className='mt-3'>
										<Card data={data} key={index} />
									</Col>
								);
							})}
						</Row>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default SideNav;
