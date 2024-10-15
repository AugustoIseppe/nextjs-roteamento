
// o nome archive e latest sao os nomes dos arquivos que estao dentro da pasta archive e latest respectivamente
export default function ArchiveLayout({ archive, latest }) {
    return (
        <div>
            <h1>News Archive Layout</h1>
            <section id="archive-filter">
                {archive}
            </section>
            <section id="archive-latest">
                {latest}
            </section>
        </div>
    );
}