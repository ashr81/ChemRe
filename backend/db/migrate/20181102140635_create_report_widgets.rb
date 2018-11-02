class CreateReportWidgets < ActiveRecord::Migration[5.2]
  def change
    create_table :report_widgets do |t|

      t.integer :report_id
      t.text :name
      t.integer :widget_type
      t.jsonb  :content
      t.timestamps
    end
  end
end
