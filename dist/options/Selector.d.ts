import * as React from 'react';
export interface SelectorProps {
    selectedKey?: string;
    defaultKey?: string;
    children: JSX.Element[];
}
export declare const Selector: React.FC<SelectorProps>;
