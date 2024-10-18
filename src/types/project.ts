export interface Project {
  title: string;
  description?: string;
  date?: string;
  website?: string;
  github?: string;
  tags?: Array<{ label: string }>;
}
