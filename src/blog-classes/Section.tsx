import SectionFactory from './SectionFactory';

class Section {
    protected title: string;
    protected content: React.ReactNode;
    protected subsections: Section[];
    private depth!: number[];

    constructor(title: string, content: React.ReactNode, subsections: Section[]) {
        this.title = title;
        this.content = content;
        this.subsections = subsections;
    }

    private depthToString(): string{
        return this.depth.slice(1).join('.');
    }

    private buildContentTitle(factory: SectionFactory): void {
        factory.addTitle(<li key={this.depthToString()} className={"blog-section-content-title-depth" + this.depth.slice(1).length}><a href={"#"+"blog-section-title-" + this.title}>{this.depthToString() +") " + this.title}</a></li>);
    }

    private buildContent(factory: SectionFactory): void {
        factory.addContent(<span key={this.depthToString()} className={"blog-section blog-section-title-depth-" + this.depth.slice(1).length} id={"blog-section-title-" + this.title}>{this.depthToString() +") " + this.title}</span>)
        factory.addContent(this.content);
    }

    public build(depth?: number[], factory: SectionFactory = new SectionFactory()): {
        titleContents: React.ReactNode[]
        contents: React.ReactNode[]
    } {
        if (!depth) {
            this.depth = [0];
        } else {
            this.depth = depth;
        }
        this.buildContentTitle(factory);
        this.buildContent(factory);
        for (let s = 0; s < this.subsections.length; s++) {
            const depthOfSubsection = [...this.depth];
            depthOfSubsection.push(s);
            depthOfSubsection[depthOfSubsection.length-1] = depthOfSubsection[depthOfSubsection.length-1] + 1;
            this.subsections[s].build(depthOfSubsection, factory);
        }
        return { titleContents: factory.titlesJSX.slice(1), contents: factory.contentsJSX.slice(1) };
    }

}

export default Section;