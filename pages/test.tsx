import Link from 'next/link'

const Test = () => { 
    return(
        <div>
            <p>
                Pagina Index
            </p>
            <Link href="/admin/usuarios">
                <button>Ir a usuarios</button>
            </Link>
        </div>
    )
}


export default Test