import { KeyboardEvent } from 'react';
import SVGIcon from '../SVGIcon/SVGIcon';
import './SectionTitle.css';

type SectionTitleProps = {
    title: string;
    icon?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    onToggle?: () => void;
}

const SectionTitle = ({ title, icon, collapsible = false, collapsed = false, onToggle }: SectionTitleProps) => {

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (!collapsible) {
            return;
        }
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle?.();
        }
    };

    const interactiveProps = collapsible ? {
        role: "button" as const,
        tabIndex: 0,
        onClick: onToggle,
        onKeyDown: handleKeyDown,
        "aria-expanded": !collapsed,
    } : {};

    return (
        <div className={collapsible ? "section-title-container section-title-collapsible" : "section-title-container"} {...interactiveProps}>
            {icon && <SVGIcon icon={icon}/>}
            <span className="section-title">{title}</span>
            {collapsible && (
                <span className="section-title-indicator" aria-hidden="true">
                    {collapsed ? "+" : "−"}
                </span>
            )}
        </div>
    );
};

export default SectionTitle;
