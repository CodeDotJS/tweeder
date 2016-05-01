import test from 'ava';
import fn from './';

test(async t => {
	const tweeder = await fn('twifo');

	t.is(tweeder.username, 'pakalupapito');
});
