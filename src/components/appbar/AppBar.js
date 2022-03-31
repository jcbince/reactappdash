import React from 'react'
import {AppBarItem, AppBarItems, AppBarStyles} from './styles'
import { Button } from './../../ui/buttons'

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
				<Button><IoNotificationsOutline size="2rem"/></Button>
			</AppBarItem>
			<AppBarItem>
				<Button><AiTwotoneMail size="2rem"/></Button>
			</AppBarItem>
			<AppBarItem>
				<Button><SiGravatar size="2rem"/></Button>
			</AppBarItem>
			<AppBarItem>
				<Button><FcSettings size="2rem"/></Button>
			</AppBarItem>
	
		</AppBarItems>
	</AppBarStyles>

  )
}

export default AppBar

