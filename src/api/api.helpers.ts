export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string => {
	return error.response ? error.response.data.error : error.message
}
