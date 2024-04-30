export const transformDto = ({ fondos, inversion, interes, prestamo, name, plazo, user_id }) => (
    {
        available_amount: Number(fondos) * 1.0,
        invested_amount: Number(inversion) * 1.0,
        remaining_amount: (Number(fondos) - Number(inversion)) * 1.0,
        profitability: Number(interes) * 1.0,
        investment_type: prestamo,
        company_name: name,
        minimum_withdrawal_period: Number(plazo),
        user_id: user_id
    }
)




export const createInvestment = async (investment) => {
    try {
        const res = await fetch("http://localhost:5000/investment/Create", {
            method: "POST",
            body: JSON.stringify(investment),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        return { success: true, ...data }

    } catch (error) {
        console.log(error);
        return { success: false, error }

    }
}