/** @jsxImportSource  theme-ui */

import { Paragraph } from "theme-ui";
import { Heading } from 'theme-ui'

export function Right(props) {
	return (
		<div sx={{
			variant: 'layout.splitRight'
		}}>
			<div style={{ margin: '100px 0 0 20px ', width: '600px'}}>
				<Heading as='h1'>{props.title}</Heading>
				<Heading as='h2'>{props.subtitle}</Heading>
				<div dangerouslySetInnerHTML={{__html: props.description}}></div>
			</div>
		</div>
	);
}
