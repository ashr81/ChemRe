import { ajaxCall } from '../utils/ajaxUtils';
import { BASE_URL } from '../reports/config';

export default class ReportsAPI {
    static fetch(reportId, onSuccess, onFailure) {
        let url = `${BASE_URL}/reports`
        if(reportId) {
            url = `${BASE_URL}/reports/${reportId}`
        }
        const settings = { url }
        ajaxCall(settings, (response) => {
            onSuccess(response)
        }, (errorResponse) => {
            onFailure(errorResponse)
        })
    }

    static create(requestData, onSuccess, onFailure) {
        const { payload } = requestData
        let settings = {
            url: `${BASE_URL}/reports`,
            method: "POST",
            data: JSON.stringify(payload)
        }
        if(requestData.id) {
            settings = Object.assign(settings, {
                url: `${BASE_URL}/reports/${requestData.id}`,
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
            url: `${BASE_URL}/reports/${reportId}/report_widgets/${widgetId}`,
            method: "DELETE",
        }
        ajaxCall(settings)
    }
}