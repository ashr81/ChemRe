class Report < ApplicationRecord
    has_many :report_widgets, dependent: :destroy
    accepts_nested_attributes_for :report_widgets, allow_destroy: true

    enum status: {
        in_progress: 1,
        failure: 2,
        success: 3
    }
end
