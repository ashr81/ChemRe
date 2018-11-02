export const statusOptions = [
    {value: 'inProgress', label: "In Progress"},
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