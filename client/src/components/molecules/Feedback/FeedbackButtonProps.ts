export interface FeedbackButtonProps {
    isExpanded: boolean;
    wasItUseful: string;
    showButtonContent: boolean;
    onClick: (e: React.MouseEvent) => void;
}
