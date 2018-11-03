import { ajaxCall } from '../utils/ajaxUtils';
export default class ReportsAPI {
    static BASE_URL = "https://chemre-backend.herokuapp.com"
    static fetch(reportId, onSuccess, onFailure) {
        const settings = {
            url: `${ReportsAPI.BASE_URL}/reports/${reportId}`
        }
        ajaxCall(settings, (response) => {
            onSuccess(response)
        }, (errorResponse) => {
            onFailure(errorResponse)
        })
    }

    static create(requestData, onSuccess, onFailure) {
        const { payload } = requestData
        let settings = {
            url: `${ReportsAPI.BASE_URL}/reports`,
            method: "POST",
            data: JSON.stringify(payload)
        }
        if(requestData.id) {
            settings = Object.assign(settings, {
                url: `${ReportsAPI.BASE_URL}/reports/${requestData.id}`,
                method: "PUT"
            })
        }
        ajaxCall(settings, (response) => {
            onSuccess(response)
        }, (errorResponse) => {
            onFailure(errorResponse)
        })
    }

    static destroyWidget(reportId, widgetId, onSuccess, onFailure) {
        let settings = {
            url: `${ReportsAPI.BASE_URL}/reports/${reportId}/report_widgets/${widgetId}`,
            method: "DELETE",
        }
        ajaxCall(settings)
    }
}