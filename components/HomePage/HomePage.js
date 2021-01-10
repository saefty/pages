/** @jsxImportSource  theme-ui */
import { Left } from './Left'
import { Right } from './Right'

export function HomePage(props) {
    return (
        <div style={{
			display: 'flex',
			flexFlow: 'row wrap',
		}} sx={{
			variant: 'layout.split'
		}}>
			<Left url={props.profileUrl}/>
			<Right title={props.title} subtitle={props.subtitle} description={props.description} />
        </div>
    );
}
