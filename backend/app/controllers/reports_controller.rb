class ReportsController < ApplicationController
    def index
        render json: Report.all
    end

    def show
        render json: Report.find(params[:id])
    end

    def new
    end

    def create
        render json: {success: Report.create(create_params)}
    end

    def update
        report = Report.find(params[:id])
        render json: {success: report.update_attributes(create_params)}
    end

    def edit
        render json: Report.find(params[:id])
    end

    def destroy
        report = Report.find(params[:id])
        render json: {success: report.destroy}
    end

    private

    def create_params
        params.require(:report).permit!
    end
end
