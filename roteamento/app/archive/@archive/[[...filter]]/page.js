import Link from "next/link";

import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({ params }) {

    const filter = params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYear(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) || 
    selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)) {
        return new Error('Invalid Filter');
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;



                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </header>

            {newsContent}
        </>
    );

    // const news = getNewsForYear(newsYears);

    // return <NewsList news={news } />;
}