import React from 'react'

export interface SelectorProps {
  selectedKey?: string;
  defaultKey?: string;
  children: JSX.Element[]
}

const Selector: React.FC<SelectorProps> = ({ selectedKey, defaultKey, children }: SelectorProps) => {
  const selectedChild = React.Children.toArray(children).find(child => React.isValidElement(child) && child.key === selectedKey);
  const defaultChild = React.Children.toArray(children).find(child => React.isValidElement(child) && child.key === defaultKey);
  return selectedChild || defaultChild || null;
}

export default Selector;
