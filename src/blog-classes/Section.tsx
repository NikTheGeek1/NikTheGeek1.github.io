import SectionFactory from './SectionFactory';

class Section {
    protected title: string;
    protected content: React.ReactNode;
    protected subsections: Section[];
    private depth!: string;

    constructor(title: string, content: React.ReactNode, subsections: Section[]) {
        this.title = title;
        this.content = content;
        this.subsections = subsections;
    }


    private buildTitle(factory: SectionFactory): void {
        factory.addTitle(<li className={"blog-section-title-" + this.depth}><a href={"#"+"blog-section-title-" + this.depth}>{this.title}</a></li>);
    }

    private buildContent(factory: SectionFactory): void {
        factory.addContent(<span className="blog-section" id={"blog-section-title-" + this.depth}>{this.title}</span>)
        factory.addContent(this.content);
    }

    public build(depth: string, factory: SectionFactory = new SectionFactory()): {
        titleContents: React.ReactNode[]
        contents: React.ReactNode[]
    } {
        this.depth = depth;
        this.buildTitle(factory);
        this.buildContent(factory);
        for (let s = 0; s < this.subsections.length; s++) {
            this.subsections[s].build(+this.depth + (s + 1).toString(), factory);
        }
        return { titleContents: factory.titlesJSX.slice(1), contents: factory.contentsJSX.slice(1) };
    }

}

export default Section;