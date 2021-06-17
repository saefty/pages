/** @jsxImportSource  theme-ui */

export function Left(props) {
	return (
		<div sx={{
			variant: 'layout.splitLeft'
		}}>
			<img src={props.url} style={{ borderRadius: '1%', width: '400px', margin: '4em auto', display: 'block', position: 'sticky', top: '2em' }}/>
		</div>
	);
}
