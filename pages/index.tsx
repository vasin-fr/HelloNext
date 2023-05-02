import { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<div>
			<Htag tag='h1'>Hello</Htag>
			<Button appearance='primary' arrow='right'>Hello</Button>
			<Button appearance='ghost'>Ghost</Button>
			<P size='l'>Hi</P>
			<Tag size='m' color='red'>Hello tab ^_^</Tag>
			<Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
		</div>
	);
}
