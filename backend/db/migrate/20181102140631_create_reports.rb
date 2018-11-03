class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|

      t.string :record_number
      t.string :experiment_number
      t.string :scientist_name
      t.string :technician_name
      t.integer :status
      t.json :summary
      t.timestamps
    end
  end
end
