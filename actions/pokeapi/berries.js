import {fetchWrapper, fetchQuery} from '@helpers/functions'

export async function getBerries(params = {}, options = {}) {
	return await fetchWrapper('https://pokeapi.co/api/v2/berry/' + fetchQuery(params), options)
}
