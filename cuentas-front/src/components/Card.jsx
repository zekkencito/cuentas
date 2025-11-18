export default function Card({ ammount, tittle, percentage }) {
    return (
        <>
            <div className="card-main">
                <small className="text-muted">{tittle}</small>
                <h3 className="fw-bold mt-2">${ammount.toFixed(2)}</h3>
                <span className="badge bg-success">{percentage}</span>
            </div>
        </>
    )
}