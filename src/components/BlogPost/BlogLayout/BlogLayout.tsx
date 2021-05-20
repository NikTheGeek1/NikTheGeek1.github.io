import './BlogLayout.css';

const BlogLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <section className="blog-layout-section">
            <div className="blog-layout-blog-container">
                {children}
            </div>
        </section>
    );
};

export default BlogLayout;