import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>Hello</Htag>
			<Button appearance='primary'>Hello</Button>
			<Button appearance='ghost'>Ghost</Button>
		</div>
	);
}
