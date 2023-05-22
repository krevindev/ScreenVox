import './FormCard.css';

export default function FormCard({ children }) {
    return (
        <div className="form-card">
            <form>
                {children}
            </form>
        </div>
    )
}