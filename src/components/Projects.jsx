import bookstoreappIMG from "./../assets/bookstoreapp.jpg";
import book from "./../assets/book.png";

export default function Projects({className}) {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            <article className={`${className} max-w-[200px] link-portfolio`}>
                <img src={bookstoreappIMG} alt="bookstoreappIMG"
                    className="portfolio-img" />
                <a href="https://julianbookstore.netlify.app/" target="_blank">
                    Book Store App ReactJS + React Query
                </a>
            </article>
            
            <article className={`${className} max-w-[200px] link-portfolio`}>
                <img src={book} alt="book png"
                    className="portfolio-img" />
                <a href="https://book-store-api.achmadjulian2.repl.co/" target="_blank">
                    Book Store API with ExpressJS + MongoDB
                </a>
            </article>
        </section>
    );
}