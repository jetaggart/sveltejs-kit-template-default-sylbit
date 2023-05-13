import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		one: Promise.resolve(1),
		two: Promise.resolve(2),
		streamed: {
			three: fetch('http://localhost:8080')
		}
	};
}
