import { CgSpinner } from 'react-icons/cg';
import './loading.css'

export default function Loading() {
    return (
        <div className = "loading-container">
            <CgSpinner className="spinner"/>
        </div>
    )
}