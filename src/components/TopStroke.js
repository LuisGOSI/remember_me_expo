import React from 'react';
import { Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';
const { width, height } = Dimensions.get('window');

export default function TopStroke() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={144}
            fill="none"
        >
            <Path
                fill="#fff"
                stroke="#fff"
                d="M173.5 136c-15-1.5-106.3-41.3-173.5-24.5V0h375v97.5C347.667 115.667 269.1 160 173.5 136Z"
            />
        </Svg>
    );
}
