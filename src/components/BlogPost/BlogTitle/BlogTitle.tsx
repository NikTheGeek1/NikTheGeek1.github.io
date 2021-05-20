import './BlogTitle.css';

const BlogTitle = ({title, author, date}: {
    title: string,
    author: string,
    date: string,
}) => {

    return (
        <div className="blog-title-container">
            <div className="blog-title">{title}</div>
            <div className="blog-author-and-date-container">
                <span className="blog-author">{author}</span>
                <span>·</span>
                <span className="blog-date">{date}</span>
            </div>
        </div>
    );
};

export default BlogTitle;