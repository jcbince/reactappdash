import React from 'react'
import {AppBarItem, AppBarItems, AppBarStyles} from './styles'
import { IconButton, Button, SubmitButton } from '../../ui/buttons'
import {IoNotificationsOutline} from 'react-icons/io5'



const AppBar = () => {
  return (
	<AppBarStyles>
		<AppBarItems>
			<AppBarItem>Branding</AppBarItem>
			<IconButton><IoNotificationsOutline size="1rem"/> Notifications</IconButton>
			<IconButton>Email</IconButton>
			<IconButton>Avatar</IconButton>
			<IconButton>Settings</IconButton>
		</AppBarItems>
	</AppBarStyles>

  )
}

export default AppBar

