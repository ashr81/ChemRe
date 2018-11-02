class ReportWidget < ApplicationRecord
    belongs_to :report, dependent: :destroy

    enum widget_type: {
        table_widget: 1
    }
end
