export const statusOptions = [
    {value: 'in_progress', label: "In Progress"},
    {value: 'success', label: 'Success'},
    {value: 'failure', label: 'Failure'}
]

export const defaultTableData = {
    name: 'List of Raw Materials',
    header: ["S.No", "Name of Material", "Quantity(g)", "Volume of Solution(mL)", "Density(g/mL)"],
    body: [
        [1, "Sodium Hydroxide", "10", "100", "0.1"],
        [2, "Hydrogen Chloride", "20", "100", "0.2"]
    ]
}

export const BASE_URL = "https://chemre-backend.herokuapp.com"
// "http://localhost:3000"