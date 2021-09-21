import axiosInstace from "./servicesconfig"

export const slackIntegration = async (id, token) => {
    try {
        let response = await axiosInstace.post('/attendance/slack/integration/', { id },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return response
    } catch (error) {
        return error
    }
}