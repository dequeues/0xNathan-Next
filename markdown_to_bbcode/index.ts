export default function MarkdownToBBCode (full_markdown_input: string): string {
    return full_markdown_input.replace(/\*\*([^\*].*?)\*\*/gmi, `[b]$1[/b]`)
        .replace(/^\`{3,3}(.*)\n((?:.|\n)+?)\n\`{3,3}\n?$/gmi, "[code]$2[/code]")
        .replace(/\n---\n/gmi, '');
};