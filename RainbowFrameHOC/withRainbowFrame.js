import React from 'react';

function withRainbowFrame(colors) {
    let arr = colors;
    return function (Component) {
        return props => (

            arr.reduce(function (prev, elem) {
                return (
                    <div className="divColorFrame" style={{ border: "solid 7px " + elem, padding: "5px", display: "inline-flex" }} >
                        {prev}
                    </div>
                );
            }, <Component{...props} />)

        );
    };
};

export { withRainbowFrame };

