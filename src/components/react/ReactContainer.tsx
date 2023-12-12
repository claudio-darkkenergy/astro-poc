import type { FC, PropsWithChildren } from 'react';

/** A counter written with React */
export const ReactContainer: FC<PropsWithChildren> = ({ children }) => {
    const title = 'I\'m a React Container Component.';
	return (<div>
		<p>{ title }</p>
		{children}
	</div>);
}
