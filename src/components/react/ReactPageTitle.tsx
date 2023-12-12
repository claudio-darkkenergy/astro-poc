import type { FC } from 'react';

/** A counter written with React */
export const ReactPageTitle: FC = () => {
    const title = 'React';
	return (<h1>Astro/<span className="text-gradient">{title}</span></h1>);
}
