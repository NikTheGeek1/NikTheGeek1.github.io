import React from 'react';
import { FolderStructureType } from '../types/folder-structure-types';
import fileNameChanger from '../utils/downloable-file-name';
import randomHashGenerator from '../utils/random-hash-generator';

class FolderStructureBuilder {
    private title: string;
    private type: FolderStructureType;
    private depth: number;
    private children: FolderStructureBuilder[];
    private parent: undefined | FolderStructureBuilder;
    private depthElement: React.ReactNode = "|  ";
    private emDash: React.ReactNode = <>&#8212;</>;
    private breakLine: React.ReactNode = <br />;
    private isFolderOpen!: boolean;
    private toggleFolder: ((type: FolderStructureType | FolderStructureType[]) => void) | undefined;
    private file: string | undefined;

    constructor(title: string, type: FolderStructureType, depth?: number, parent?: FolderStructureBuilder, toggleFolder?: (type: FolderStructureType | FolderStructureType[]) => void, file?: string) {
        this.title = title;
        this.type = type;
        this.depth = depth ? depth : 0;
        this.children = [];
        this.parent = parent;
        this.toggleFolder = toggleFolder;
        this.isFolderOpenDecider();
        this.file = file;
    }

    private isFolderOpenDecider(): void {
        if (Array.isArray(this.type)) {
            this.type.forEach(className => {
                if (className === "oppened-folder") this.isFolderOpen = true;
            });
        }
        if (this.type === "oppened-folder") this.isFolderOpen = true;
    }

    public toggleFolderFunc(): void {
        if (Array.isArray(this.type)) {
            this.type = this.type.map(className => {
                if (className === "closed-folder") return "oppened-folder";
                if (className === "oppened-folder") return "closed-folder";
                return className;
            });
        }
        if (this.type === "closed-folder") this.type = "oppened-folder";
        else if (this.type === "oppened-folder") this.type = "closed-folder";
        if (this.toggleFolder) {
            this.toggleFolder(this.type);
        }
    }

    public addChild(title: string, type: FolderStructureType, toggleFolder?: (type: FolderStructureType | FolderStructureType[]) => void, file?: string): this {
        this.children.push(new FolderStructureBuilder(title, type, this.depth + 1, this, toggleFolder, file));
        return this;
    }

    public switchToParent(): FolderStructureBuilder {
        if (!this.parent) {
            throw new Error("You are on the top level");
        } else {
            return this.parent;
        }
    }

    public switchToChild(depth?: number): FolderStructureBuilder {
        try {
            if (depth !== undefined) {
                return this.children[depth];
            } else {
                return this.children[this.children.length - 1];
            }
        } catch (error) {
            throw new Error(`There is no child with index ${depth}`);
        }
    }

    private outerFragment({ depth, children }: { depth: number, children: React.ReactNode }): JSX.Element {
        if (!!!depth) {
            return <p key={randomHashGenerator(10) + depth} className="folder-structure-container">{children}</p>;
        } else {
            return <>{children}</>;
        }
    }

    private buildTitleClasses(): string {
        let classes: string = "";
        if (Array.isArray(this.type)) {
            classes = this.type.map(className => "folder-structure-element-type-" + className).join(" ");
        } else {
            classes = "folder-structure-element-type-" + this.type;
        }
        if (this.toggleFolder) classes += " folder-structure-element-type-cursor";

        return classes;
    }

    private downloableComponent({ file, children }: { file: string | undefined, children: React.ReactNode }): JSX.Element {
        if (file) {
            return <a href={file} download={fileNameChanger(file)} className="folder-structure-element-type-downloable">{children}</a>;
        } else {
            return <>{children}</>;
        }
    }

    public build(lastChild: boolean = false): React.ReactNode {
        return (
            <this.outerFragment key={randomHashGenerator(10) + this.depth + this.title + "outerFragment"} depth={this.depth}>
                {!!!this.depth && <>|{this.breakLine}</>}
                {Array(this.depth).fill(this.depthElement)}|{this.emDash}<this.downloableComponent file={this.file}><span onClick={() => this.toggleFolderFunc()} className={"folder-structure-element-type " + this.buildTitleClasses()}>{this.title}</span></this.downloableComponent>{this.breakLine}
                {/* {Array((lastChild && !!!this.children.length || !this.isFolderOpen) ? 1 : this.depth).fill(this.depthElement)}|{this.breakLine} */}
                {Array((!lastChild || this.isFolderOpen) ? this.depth : 1).fill(this.depthElement)}|{this.breakLine}
                {this.isFolderOpen && this.children.map((child, i) => child.build(i === this.children.length-1))}
            </this.outerFragment>
        );
    }
}


export default FolderStructureBuilder;