import Link from 'next/link'

const index = () => {
    return (
        <div>
            Pagina de admin de usuarios
            <Link href="/">
                <a className="bg-red-400 px-5 py-2 rounded-lg">
                    Home
                </a>
            </Link>
        </div>
    )
}

export default index
