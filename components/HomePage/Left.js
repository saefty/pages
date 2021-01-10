/** @jsxImportSource  theme-ui */

export function Left(props) {
	return (
		<div sx={{
			variant: 'layout.splitLeft'
		}}>
			<img src={props.url} style={{ borderRadius: '50%', width: '400px', margin: '4em auto', display: 'block' }}/>
		</div>
	);
}
