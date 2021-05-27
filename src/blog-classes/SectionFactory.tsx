class SectionFactory {
    public titlesJSX: React.ReactNode[] = [];
    public contentsJSX: React.ReactNode[] = [];

    public addTitle(title: React.ReactNode): void {
        this.titlesJSX.push(title);
    }

    public addContent(content: React.ReactNode): void {
        this.contentsJSX.push(content);
    }
}

export default SectionFactory;