import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>Hello</Htag>
			<Button appearance='primary' arrow='right'>Hello</Button>
			<Button appearance='ghost'>Ghost</Button>
			<P size='l'>Hi</P>
		</div>
	);
}
