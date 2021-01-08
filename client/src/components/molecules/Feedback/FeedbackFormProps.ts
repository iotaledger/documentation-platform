export interface FeedbackFormProps {
    onClose: () => void;
    onSubmit: (result: {
        wasItUseful?: string;
        comments: string;
    }
    ) => void;
}
