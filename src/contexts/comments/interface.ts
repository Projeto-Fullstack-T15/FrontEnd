export interface ICommentContextProps {
  comment: IComment[];
  getComment: (announcementId: number) => Promise<void>;
  createComment: (
    announcementId: number,
    data: ICommentRequest
  ) => Promise<void>;
  updateComment: (commentId: number, data: ICommentRequest) => Promise<void>;
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
  account: {
    id: number;
    email: string;
    password: string;
    phone: string;
    reset_token: null | string;
    account_type: string;
    created_at: Date;
    last_updated_at: Date;
    user: {
      id: number;
      name: string;
      cpf: string;
      birthday: Date;
      description: string;
      account_id: number;
      created_at: Date;
      last_updated_at: Date;
    };
  };
}

export interface ICommentRequest {
  text: string;
}
