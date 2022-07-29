import React from 'react';
export interface SpaceProps {
  height: number;
  width?: number;
}

const Space = (props: SpaceProps) => {

    const { height, width } = props;

    return <div style={{ height, width }} />;
};

export default Space;
