import test from 'ava';
import fn from './';

test(async t => {
	const tweeder = await fn('Rishi_Giri_');

	t.is(tweeder.tweet0, 'Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible.');
});
