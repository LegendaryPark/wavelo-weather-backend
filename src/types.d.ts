type ErrorMessages<T> = {
  [P in keyof T]?: string[];
};
