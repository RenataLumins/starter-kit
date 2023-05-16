export const fetchWrapper = async (uri, options = {}) => {
	let response

	try {
		response = await fetch(uri, options)
	} catch (error) {
		console.error(error)

		response = false
	}

	return await responseWrapper(response)
}

export const responseWrapper = async (response) => {
	let data

	try {
		data = await response.json()
	} catch (error) {
		data = {}
	}

	if (response && response.ok) {
		return {
			success: true,
			body: data,
		}
	} else {
		return {
			success: false,
			body: {
				...data,
			},
		}
	}
}

export const fetchQuery = (params = {}) => {
	let query = ''

	Object.entries(params).forEach(([key, value]) => {
		query += (query ? '&' : '?') + key + '=' + value
	})

	return query
}
