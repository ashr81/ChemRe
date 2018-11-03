class ReportWidget < ApplicationRecord
    belongs_to :report

    enum widget_type: {
        table_widget: 1
    }
end
