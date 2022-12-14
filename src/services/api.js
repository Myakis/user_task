const api = {
	get(url) {
		return fetch(`${process.env.REACT_APP_API_URL}${url}`, {
			headers: {
				Authorization: `Bearer `,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
			.then((res) => {
				const { status, ok } = res
				return res.json()
					.then(r => ({ ...r, ok, reqStatus: status }))
					.catch(err => ({ err, reqStatus: status }))
			})
			.catch(err => err)
	},
	post(url, data) {
		return fetch(
			`${url}`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data),
				credentials: 'include'
			}
		)
			.then((res) => {
				const { status, ok } = res
				return res.text().then((text) => {
					return ({
						...(text ? JSON.parse(text) : {}),
						ok,
						reqStatus: status
					})
				}).catch(err => ({ err, reqStatus: status }))
			})
			.catch(err => err)
	}
}
export default api
