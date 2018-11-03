class ReportWidgetsController < ApplicationController
    def index
        report = Report.find(params[:report_id])
        render json: report.report_widgets
    end

    def show
        render json: Report.find(params[:report_id]).report_widgets.find_by(id: params[:id])
    end

    def destroy
        report_widget = Report.find(params[:report_id]).report_widgets.find(params[:id])
        render json: {success: report_widget.destroy}
    end
end
