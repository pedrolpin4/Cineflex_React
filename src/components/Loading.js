import { CgSpinner } from 'react-icons/cg';
import '../styles/Loading.css'

export default function Loading() {
    return (
        <div className = "loading-container">
            <CgSpinner className="spinner"/>
        </div>
    )
}