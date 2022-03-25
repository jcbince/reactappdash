import React from 'react'
import {AppBarItem, AppBarItems, AppBarStyles} from './styles'
import { IconButton } from '../../ui/buttons'

import {IoNotificationsOutline} from 'react-icons/io5'
import {SiGravatar} from 'react-icons/si'
import {AiTwotoneMail} from 'react-icons/ai'
import {FcSettings} from 'react-icons/fc'

const AppBar = () => {
  return (
	<AppBarStyles>
		<AppBarItems>
			<AppBarItem>Branding</AppBarItem>
		</AppBarItems>
		<AppBarItems>
			<AppBarItem>
				<IconButton><IoNotificationsOutline size="2rem"/></IconButton>
			</AppBarItem>
			<AppBarItem>
				<IconButton><AiTwotoneMail size="2rem"/></IconButton>
			</AppBarItem>
			<AppBarItem>
				<IconButton><SiGravatar size="2rem"/></IconButton>
			</AppBarItem>
			<AppBarItem>
				<IconButton><FcSettings size="2rem"/></IconButton>
			</AppBarItem>
	
		</AppBarItems>
	</AppBarStyles>

  )
}

export default AppBar

