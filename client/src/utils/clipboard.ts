/**
 * @param text
 */
export function copyToClipboard(text: string): boolean {
    try {
        const textArea = document.createElement("textarea");

        // Prevent zooming on iOS
        textArea.style.fontSize = "12pt";
        // Reset box model
        textArea.style.border = "0";
        textArea.style.padding = "0";
        textArea.style.margin = "0";
        // Move element out of screen horizontally
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || document.documentElement.scrollTop;
        textArea.style.top = `${yPosition}px`;

        textArea.setAttribute("readonly", "");
        textArea.value = text;

        document.body.append(textArea);

        textArea.select();
        document.execCommand("Copy");
        textArea.remove();

        return true;
    } catch {
        // Not much we can do
        return false;
    }
}
