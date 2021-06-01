import React from 'react';
import { FolderStructureType } from '../types/folder-structure-types';

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
    private isFolder!: boolean;
    private toggleFolder: ((type: FolderStructureType | FolderStructureType[]) => void) | undefined;

    constructor(title: string, type: FolderStructureType, depth?: number, parent?: FolderStructureBuilder, toggleFolder?: (type: FolderStructureType | FolderStructureType[]) => void) {
        this.title = title;
        this.type = type;
        this.depth = depth ? depth : 0;
        this.children = [];
        this.parent = parent;
        this.toggleFolder = toggleFolder;
        this.isFolderOpenDecider();
    }

    private isFolderOpenDecider(): void{
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

    public addChild(title: string, type: FolderStructureType, toggleFolder?: (type: FolderStructureType | FolderStructureType[]) => void): this {
        this.children.push(new FolderStructureBuilder(title, type, this.depth + 1, this, toggleFolder));
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
            return <p key={depth} className="folder-structure-container">{children}</p>;
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

    public build(): React.ReactNode {
        return (
            <this.outerFragment key={this.depth + this.title + "outerFragment"} depth={this.depth}>
                {!!!this.depth && <>|{this.breakLine}</>}
                {Array(this.depth).fill(this.depthElement)}|{this.emDash}<span onClick={() => this.toggleFolderFunc()} className={"folder-structure-element-type " + this.buildTitleClasses()}>{this.title}</span>{this.breakLine}
                {Array(this.depth).fill(this.depthElement)}|{this.breakLine}
                {this.isFolderOpen && this.children.map(child => child.build())}
            </this.outerFragment>
        );
    }
}


export default FolderStructureBuilder;