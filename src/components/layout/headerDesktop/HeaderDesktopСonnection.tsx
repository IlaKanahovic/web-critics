import Link from "next/link";


export function HeaderDesktopСonnection() {
    return (
        <div>
            <Link href="/contacts" >
                <button className="button-main-styles button-primary">
                    Обсудить проблему
                </button>
            </Link>
        </div>
    )
}
