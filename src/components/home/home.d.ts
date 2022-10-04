export interface DateProps {
  className?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: number;
  color?: string;
}
export interface ShowDateProps extends DateProps {
  year: string;
  month: string;
  date: string;
}
