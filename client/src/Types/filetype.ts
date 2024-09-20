export interface File {
  id: string;
  name: string;
  content: string;
}

interface SidebarProps {
  files: File[];
  onFileSelect: (file: File) => void;
}

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
}

interface TerminalProps {
  onCommandExecuted: (command: string) => void;
}
