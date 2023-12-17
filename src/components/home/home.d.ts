import React, { ReactNode } from 'react';

export interface FontStyleProps {
  className?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}
export interface ShowDateProps extends FontStyleProps {
  year: string;
  month: string;
  date: string;
}

export interface ShowTimeProps extends FontStyleProps {
  hours: string;
  minutes: string;
  seconds: string;
}

export interface TodayTimerProgressBarProps {
  className?: string;
  baseColor?: string;
  innerColor?: string;
}
export interface ShowProgressBarProps extends TodayTimerProgressBarProps {
  width?: number;
}

export interface SectionProps extends SectionTitleProps {
  children: ReactNode;
}
export interface SectionTitleProps {
  title: string;
}
