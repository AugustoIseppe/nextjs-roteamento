import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
    const newSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newSlug);

    // Se nao houver nenhum item de noticia, chama a funcao notFound que procurará a notFound.js mais próxima
    if (!newsItem) {
        notFound();
    }

    return (
        <article className='news-article'>
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}