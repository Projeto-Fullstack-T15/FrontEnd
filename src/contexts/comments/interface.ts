export interface ICommentContextProps {
  comment: IComment;
  getComment: (announcementId: number) => Promise<void>;
  createComment: (announcementId: number, data: ICommentRequest) => Promise<void>;
  updateComment: (announcementId: number, data: ICommentRequest) => Promise<void>;
  deleteComment: (commentId: number) => Promise<void>;
}

export interface ICommentProviderProps {
  children: React.ReactNode;
}

export interface IComment {
  id: number;
  text: string;
  announcement_id: number;
  account_id: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface ICommentRequest {
  text: string
}