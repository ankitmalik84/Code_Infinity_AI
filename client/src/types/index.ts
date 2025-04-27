export interface SearchInfo {
  stages: string[];
  query: string;
  urls: string[] | string;
  error?: string;
}

export interface Message {
  id: number;
  content: string;
  isUser: boolean;
  type: string;
  isLoading?: boolean;
  searchInfo?: SearchInfo;
}

export interface InputBarProps {
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface MessageAreaProps {
  messages: Message[];
}
