# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Report.destroy_all
ReportWidget.destroy_all

Report.create({
    record_number: "1234",
    experiment_number: "3234323",
    scientist_name: "Ashrith",
    technician_name: "Blob#1",
    status: "success",
    report_widgets_attributes: [{
    name: "List of Raw Materials",
    widget_type: "table_widget",
    content: {
        name: 'List of Raw Materials',
        header: ["S.No", "Name of Material", "Quantity(g)", "Volume of Solution(mL)", "Density(g/mL)"],
        body: [
            [1, "Sodium Hydroxide", "10", "100", "0.1"],
            [2, "Hydrogen Chloride", "20", "100", "0.2"]
        ]
    }
}, {
    name: "List of Raw Materials 2",
    widget_type: "table_widget",
    content: {
        name: 'List of Raw Materials',
        header: ["S.No", "Name of Material", "Quantity(g)", "Volume of Solution(mL)", "Density(g/mL)"],
        body: [
            [1, "Sodium Hydroxide", "10", "100", "0.1"],
            [2, "Hydrogen Chloride", "20", "100", "0.2"]
        ]
    }
}] 
})