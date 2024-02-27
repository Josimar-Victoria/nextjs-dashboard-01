import Link from 'next/link'

function NotFound() {
    return (
        <section className=''>
            <div>
                <h1 className=''>NotFound</h1>
                <Link className='' href="/dashboard">Volver al inicio</Link>
            </div>
        </section>
    )
}

export default NotFound