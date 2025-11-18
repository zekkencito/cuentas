export default function CreditCard({ bank, account, name, expiry }) {
    return (
        <>
            <div className="credit-card">
                <h5>{bank}</h5>
                <div className="credit-card-number">{account}</div>
                <div className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span>{expiry}</span>
                </div>
            </div>
        </>
    )
}