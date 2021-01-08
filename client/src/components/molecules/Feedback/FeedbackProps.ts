export interface FeedbackProps {
    onSubmit: (result: {
        wasItUseful?: string;
        comments: string;
    }) => void;
}
