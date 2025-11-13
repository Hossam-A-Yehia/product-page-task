
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
}

export interface LoadingState {
  isLoading: boolean;
  isError: boolean;
  error?: ApiError;
}
