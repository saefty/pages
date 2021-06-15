/** @jsxImportSource  theme-ui */
import { Left } from '../HomePage/Left'
import { Right } from '../HomePage/Right'

export function HomePage(props) {
    return (
        <div style={{
			display: 'flex',
			flexFlow: 'row wrap',
		}} sx={{
			variant: 'layout.split'
		}}>
			<Left url={props.profileUrl}/>
			<Right title={props.title} subtitle={props.subtitle} children={props.children} />
        </div>
    );
}
