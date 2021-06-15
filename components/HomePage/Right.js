/** @jsxImportSource  theme-ui */

import { Paragraph } from "theme-ui";
import { Heading } from 'theme-ui'

export function Right(props) {
	let description;
	if(props.description)
		description = <div dangerouslySetInnerHTML={{__html: props.description}}></div>
	else
		description = <div>{props.children}</div>
	return (
		<div sx={{
			variant: 'layout.splitRight'
		}}>
			<div style={{ margin: '100px 0 0 20px ', maxWidth: '1000px'}}>
				<Heading as='h1'>{props.title}</Heading>
				<Heading as='h2'>{props.subtitle}</Heading>
				{description}
			</div>
		</div>
	);
}
