export default function Footer({ totals }) {
    const formatCurrency = (value) => {
        const formatted = Number(value || 0).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        return formatted.replace(/\u00A0/g, ' ');
    };

    const monthlyTotal = formatCurrency(totals?.monthly);
    const annualTotal = formatCurrency(totals?.annual);

    return (
        <>
        <footer className="footer sm:footer-horizontal bg-neutral text-white p-10 fixed bottom-0 left-0 right-0">
        <nav>
            <h6 className="footer-title text-xl font-bold text-red-300">Acumulado</h6>
        </nav>
        <nav>
            <h6 className="footer-title text-xl font-bold text-red-300" >Mensal: {monthlyTotal}</h6>
        </nav>
        <nav>
            <h6 className="footer-title text-xl font-bold text-red-300">Anual: {annualTotal}</h6>
        </nav>
        </footer>
        </>
    );
}