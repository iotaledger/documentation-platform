
export interface VersionPickerProps {
    versions: string[];
    currentVersion: string;
    onChange: (newVersion: string) => void;
}
